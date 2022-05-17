import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('is title displayed', () => {
  render(<App />);
  const title = screen.getByText(/Languages to learn/i);
  expect(title).toBeInTheDocument();
})

test('is the entry toggle button working', () => {
  render(<App />);
  const inputToggleButton = document.querySelector("#app__toggleButton--input");

  if (inputToggleButton) {
    fireEvent.click(inputToggleButton);
    const inputForm = document.querySelector("#inputForm__container");
    expect(inputForm).toBeInTheDocument();
  }

  const selectionToggleButton = document.querySelector("#app__toggleButton--selection");

  if (selectionToggleButton) {
    fireEvent.click(selectionToggleButton);
    const inputForm = document.querySelector("#selector__container");
    expect(inputForm).toBeInTheDocument();
  }
})

test('are there a correct number of options in Selector', () => {
  render(<App />);
  expect(screen.getAllByRole('option').length).toBe(11);
})

test('is selection added to the list', () => {
  render(<App />);

  let selectElement = document.querySelector("#selector__languageSelect");
  selectElement && fireEvent.change(selectElement, { target: { value: 'C' } })
  let addButton = document.querySelector("#selector__button");

  if (addButton) {
    fireEvent.click(addButton)
    let languageEntry = document.querySelector("#languageList__entry--C");
    expect(languageEntry).toBeInTheDocument();
  }
})

test('is selection deleted from the list', () => {
  render(<App />);
  let selectElement = document.querySelector("#selector__languageSelect");
  selectElement && fireEvent.change(selectElement, { target: { value: 'C' } })
  let addButton = document.querySelector("#selector__button");

  if (addButton) {
    fireEvent.click(addButton)
    let deleteButton = document.querySelector("#languageList__deleteButton--C");
    deleteButton && fireEvent.click(deleteButton);

    let languageEntry = document.querySelector("#languageList__entry--C");
    expect(languageEntry).not.toBeInTheDocument();
  }
})