import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next"

// import { AppRoutes } from 'routes'

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
        // <AppRoutes changeLanguage={changeLanguage} />
        <h1>TEST</h1>
    )
}

export default App
