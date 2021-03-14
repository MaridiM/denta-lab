import React, { useEffect, useState } from 'react'
import 'utils/language/i18n' // import config to translate,  using i18next 

import { useTranslation } from "react-i18next"

import { Routes } from 'routes' 


const App = () => {
    const [ lng, setLng ] = useState('en')
    const { i18n } = useTranslation();
    
    useEffect(() => {
        i18n.changeLanguage(lng)
    },[i18n, lng])
    
    const changeLanguage = (lng) => {
        setLng(lng)
    }

    return (
        <div className='wrapper'>
            <Routes changeLanguage={changeLanguage} />
        </div>
    )
}

export default App
