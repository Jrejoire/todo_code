import { fireEvent, render } from '@testing-library/react';
import InputForm from './InputForm';

test('is the input form hidden at start', () => {
    render(<InputForm handleEntry={() => { }} />);
    const inputForm = document.querySelector("#selector__container");
    expect(inputForm).not.toBeInTheDocument();
})

test('is entry handler working', () => {
    const mockHandleEntry = jest.fn();
    render(<InputForm handleEntry={mockHandleEntry} />);
    const addButton = document.querySelector("#inputForm__button");
    const languageNameInput = document.querySelector("#language-name");
    languageNameInput && fireEvent.change(languageNameInput, {target: {value: 'test'}})

    if (addButton) {
        fireEvent.click(addButton);
        expect(mockHandleEntry.mock.calls.length).toBe(1);
    }
})

test('is error message on missing name input', () => {
    render(<InputForm handleEntry={() => {}} />);
    const addButton = document.querySelector("#inputForm__button");
    
    if (addButton) {
        fireEvent.click(addButton);
        const errorMessage = document.querySelector("#inputForm__error");
        expect(errorMessage).toBeInTheDocument();
    }
})