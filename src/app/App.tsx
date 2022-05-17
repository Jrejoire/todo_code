import { useEffect, useState } from "react";
import "./App.css";

//components
import InputForm from "../components/inputForm/InputForm";
import LanguageList from "../components/languageList/LanguageList";
import LanguageSelection from "../components/selector/Selector";

//interfaces
import { languageInterface } from "../interfaces/interfaces";

//data
import data from "../config/data";


const App = () => {
  const [options, setOptions] = useState<languageInterface[] | []>([]);
  const [selected, setSelected] = useState<languageInterface | undefined>(undefined);
  const [languages, setLanguages] = useState<languageInterface[] | []>([]);
  const [showSelection, setShowSelection] = useState<boolean>(true);

  const onSelect = (value: string) => {
    let selectedItem: languageInterface = options.filter(option => option.name === value)[0];
    setSelected(selectedItem);
  }

  const handleSelection = () => {
    if (selected) {
      setLanguages((prevState) => {
        if (!prevState.some(language => language.name === selected.name)) {
          return [...prevState, selected];
        } else {
          return prevState;
        }
      });

      let updatedOptions = options.filter(option => option.name !== selected.name);
      let sortedOptions = updatedOptions.sort((a: languageInterface, b: languageInterface) => (a.name.localeCompare(b.name)));
      setOptions(sortedOptions);
      setSelected(undefined);
    } else {
      console.log("Nothing to add.")
    }
  }

  const handleEntry = (name: string, logo: string) => {
    if (name && logo) {
      setLanguages((prevState) => {
        if (!prevState.some(language => language.name === name)) {
          return [...prevState, { name, logo }];
        } else {
          return prevState;
        }
      });
    }
  }

  const handleDelete = (language: languageInterface) => {
    setLanguages((prevState) => {
      let updatedLanguages = prevState.filter(item => item.name !== language.name);
      return [...updatedLanguages];
    })

    let updatedOptions = [...options, language];
    let sortedOptions = updatedOptions.sort((a: languageInterface, b: languageInterface) => (a.name.localeCompare(b.name)));
    setOptions(sortedOptions);
  }

  useEffect(() => {
    if (data && data.languages) {
      let languagesData: languageInterface[] = data.languages;
      let sortedLanguages = languagesData.sort((a: languageInterface, b: languageInterface) => (a.name.localeCompare(b.name)));
      setOptions(sortedLanguages);
    }
  }, [])

  return (
    <div className="w-screen h-screen bg-gray-300 sm:p-16 flex justify-center">
      <div className="w-full h-full max-w-4xl bg-white rounded-lg p-16">
        <div className="w-full h-full text-center">
          <h1 className="text-3xl font-bold">Languages to learn</h1>
          <div className="w-full h-full flex flex-col justify-start items-center my-16">
            <div className="w-full h-auto">
              {
                showSelection ?
                  <>
                    <LanguageSelection options={options} selected={selected} onSelect={onSelect} handleSelection={handleSelection} />
                    <div className="w-full flex flex-row mb-4 justify-end items-center">
                      <p className="mr-2">Not in the list?</p>
                      <button id="app__toggleButton--input" className="text-blue-500 p-2" onClick={() => setShowSelection(false)}>Add your suggestion!</button>
                    </div>
                  </>
                  :
                  <>
                    <InputForm handleEntry={handleEntry} />
                    <div className="w-full flex flex-row mb-4 justify-end items-center">
                      <button id="app__toggleButton--selection" className="app__toggleButton text-blue-500 p-2" onClick={() => setShowSelection(true)}>Show selection</button>
                    </div>
                  </>
              }
            </div>
            <LanguageList languages={languages} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;