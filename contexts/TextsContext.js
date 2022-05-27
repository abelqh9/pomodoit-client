import React, { useState, useEffect, useContext } from 'react'
import { allApplicationTexts } from '../helpers/allApplicationTexts'
import { useDBContext } from './DBContext'

let TextsContext = React.createContext()

export function TextsProvider ({children}) {

    const { userData, updateDoc } = useDBContext();

    const [language, setLanguage] = useState("English");

    useEffect(() => {
        if (userData) setLanguage(userData.language)
    }, [userData])

    function changeLanguage() {
        const appLanguages = ["English", "Español", "Português"],
        oldLanguageIndex = appLanguages.indexOf(language),
        nextLanguage = appLanguages[oldLanguageIndex === 2 ? 0 : oldLanguageIndex + 1];
        updateDoc({ language: nextLanguage });
        setLanguage(nextLanguage);
    }

    const value = {
        language, appTexts: allApplicationTexts[language], changeLanguage
    }

    return <TextsContext.Provider value={value}> {children} </TextsContext.Provider>
}

export function UseTextsContext () {
    return useContext(TextsContext)
}