import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next"
import mobileSize from 'utils/helpers/mobileSize'


import { AppRoutes } from 'routes'

const App = () => {
    const [ lng, setLng ] = useState('en')
    const { i18n } = useTranslation();
    
    useEffect(() => {
        i18n.changeLanguage(lng)
        mobileSize()
    },[i18n, lng, mobileSize])
    
    const changeLanguage = (lng) => {
        setLng(lng)
    }

    return (
        <AppRoutes changeLanguage={changeLanguage} />
    )
}

export default App
