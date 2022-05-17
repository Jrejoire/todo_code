import { languageInterface } from "../../interfaces/interfaces";

interface LanguageListInterface {
    languages: languageInterface[] | [],
    handleDelete(language: languageInterface): void,
}

const LanguageList = ({ languages, handleDelete }: LanguageListInterface) => {
    return (
        <div id="languageList__container" className="w-full h-60 lg:h-72 bg-gray-300 rounded-lg p-4 overflow-y-scroll">
            {
                languages.map((language: languageInterface) => (
                    < div id={`languageList__entry--${language.name}`} key={language.name} className="w-full h-10 bg-gray-400 rounded-lg flex justify-between items-center mb-2" >
                        <div className="w-14 h-full p-1">
                            <img className="w-full h-full object-contain" src={language.logo} alt={`${language.name}-logo`} />
                        </div>
                        <div className="w-full flex justify-center">
                            <p className="font-bold">
                                {language.name}
                            </p>
                        </div>
                        <button id={`languageList__deleteButton--${language.name}`} className="
                            w-8 h-6 text-black hover:text-white font-bold 
                            border-2 border-black hover:bg-black rounded-full mr-3 
                            flex justify-center items-center"
                            onClick={() => handleDelete(language)}
                        >
                            X
                        </button>
                    </div >
                ))
            }
        </div>
    )
}

export default LanguageList;