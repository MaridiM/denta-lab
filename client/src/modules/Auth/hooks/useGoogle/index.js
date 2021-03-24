// Core
import { useState } from 'react'
import { loader } from 'graphql.macro'
import { useMutation } from '@apollo/client'

// Graphql mutations
const mutationGoogleAuth = loader('./gql/mutationGoogleAuth.graphql')

export const useGoogle = () => {
    const [googleResponse, setGoogleResponse] = useState({})
    const [ _googleAuth, {data}] = useMutation(mutationGoogleAuth)


    const googleLogin = response => {
        console.log(response)
        setGoogleResponse({...googleResponse, ...response})
        console.log('You login successfully, by Google')
    }
    
    const googleLogout = response => {
        console.log(response)
        setGoogleResponse({})
        console.log('You logout successfully, by Google')
    }

    return { googleResponse, googleLogin, googleLogout }
}