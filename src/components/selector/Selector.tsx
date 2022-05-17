import { languageInterface } from "../../interfaces/interfaces"

interface selectorInterface {
    options: languageInterface[] | [],
    selected: languageInterface | undefined,
    onSelect(value: string): void,
    handleSelection(): void,
}

const Selector = ({ options, selected, handleSelection, onSelect }: selectorInterface) => {
    return (
        <div id="selector__container" className="w-full flex flex-row">
            <select name="language" id="selector__languageSelect" className="w-full h-10 text-center bg-gray-100 rounded mr-4" value={selected ? selected.name : ""} onChange={(e) => onSelect(e.target.value)}>
                <option value="" disabled hidden>--Please choose an option--</option>
                {
                    options.map((option: languageInterface, index: number) => (
                        <option key={index} value={option.name}>
                            {option.name}
                        </option>
                    ))
                }
            </select>
            <button id="selector__button" className="w-20 rounded-lg border-2 border-gray-500 text-gray-500 font-bold hover:text-white hover:bg-gray-500" onClick={handleSelection}>
                Add
            </button>
        </div>
    )
}

export default Selector;