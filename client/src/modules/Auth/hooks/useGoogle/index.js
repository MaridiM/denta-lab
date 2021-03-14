import { useState } from 'react'


export const useGoogle = () => {
    const [googleResponse, setGoogleResponse] = useState({})

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