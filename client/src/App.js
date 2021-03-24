// Core 
import React, { useEffect, useState } from 'react'
import 'utils/language/i18n' // import config to translate,  using i18next 
import { useTranslation } from "react-i18next"
import { ApolloProvider } from '@apollo/client'

// App 
import { Routes } from 'routes' 
import { client } from 'utils/graphql/apolloClient'


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
        <ApolloProvider client={client}>
            <div className='wrapper'>
                <Routes changeLanguage={changeLanguage} />
            </div>
        </ApolloProvider>
    )
}

export default App
