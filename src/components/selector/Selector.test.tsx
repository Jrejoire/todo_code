import { fireEvent, render, screen } from '@testing-library/react';
import Selector from './Selector';

test('is default option set', () => {
    render(<Selector options={[]} selected={{ name: "", logo: "" }} handleSelection={() => { }} onSelect={() => { }} />);
    const defaultOption = screen.getByText(/--Please choose an option--/i);
    expect(defaultOption).toBeInTheDocument();
})


test('is selection handler working', () => {
    const mockHandleSelection = jest.fn();
    render(<Selector options={[]} selected={{ name: "", logo: "" }} handleSelection={mockHandleSelection} onSelect={() => { }} />);

    let selectElement = document.querySelector("#selector__languageSelect");
    // selectElement && fireEvent.change(selectElement, { target: { value: 'C' } })
    let addButton = document.querySelector("#selector__button");

    if (addButton) {
        fireEvent.click(addButton);
        expect(mockHandleSelection.mock.calls.length).toBe(1);
    }
})