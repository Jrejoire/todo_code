import { render } from '@testing-library/react';
import LanguageList from './LanguageList';

test('does language selection exist', () => {
    render(<LanguageList languages={[]} handleDelete={() => {}} />);
    const languageContainer = document.querySelector("#languageList__container")
    expect(languageContainer).not.toBeNull();
})
