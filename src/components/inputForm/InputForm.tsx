import { useState } from "react";
import { capitalize } from "../../tools/format";

const InputForm = ({ handleEntry }: { handleEntry(name: string, logo: string): void }) => {
    const [languageName, setLanguageName] = useState<string>("");
    const [languageLogo, setLanguageLogo] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleClick = () => {
        if (languageName) {
            let name = capitalize(languageName);
            let logo: string = languageLogo || "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png";
            
            handleEntry(name, logo);
            clearInputs();
        } else {
            setErrorMessage("The name field is required.")
            console.log("Please fill in the languageName")
            setTimeout(() => {
                setErrorMessage("");
            }, 3000)
        }
    }

    const clearInputs = () => {
        setLanguageName("");
        setLanguageLogo("");
    }

    return (
        <div id="inputForm__container" className="w-full flex flex-row">
            <div className="grow border-2 border-gray-300 p-2  mr-4">
                <div className="flex flex-wrap justify-around">
                    <div className="w-full lg:w-1/2 flex items-center">
                        <label htmlFor="language-name">Name*</label>
                        <input id="language-name" type="text" className="grow border-2 bg-gray-100 m-2" value={languageName} onChange={(e) => setLanguageName(e.target.value)} />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center">
                        <label htmlFor="language-logo">Logo (optional)</label>
                        <input id="language-logo" type="text" className="grow border-2 bg-gray-100 m-2" value={languageLogo} onChange={(e) => setLanguageLogo(e.target.value)} />
                    </div>
                </div>
                {
                    errorMessage && <p id="inputForm__error" className="w-full text-left text-red-400">{errorMessage}</p>

                }
            </div>
            <button id="inputForm__button" className="w-20 rounded-lg border-2 border-gray-500 text-gray-500 font-bold hover:text-white hover:bg-gray-500" onClick={handleClick}>
                Add
            </button>
        </div>
    )
}

export default InputForm;