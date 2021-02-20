import { useState } from 'react'
import 'utils/facebookSDK'

export const useFacebook = () => {
    const [facebookResponse, setFacebookResponse] = useState({})
    
    // Process login and get user data from facebook
    const login = () => {
        window.FB.api('/me', { fields: 'name,email,picture' }, response => {
            setFacebookResponse ({ 
                ...window.FB.getAuthResponse(),
                ...response
            })
            console.log({ 
                ...window.FB.getAuthResponse(),
                ...response
            })
        }) 
    }

    // Use response and call login method for auth by facebook
    const statusChangeCallback = response => {  
        if (response.status === 'connected') {   
            login()  
        } else {                        
            if(response.status === 'unknown') {
                window.FB.login( response => {
                    if (response.authResponse)  {
                        login()
                    } else {
                        console.log('Facebook login failed')
                    }
                }) 
            }
        }
    }

    // Action to  Login in  Facebook && authorization or login in app by facebook
    const facebookLogin = () => {  
        window.FB.getLoginStatus( response => {   
            statusChangeCallback(response)
        })
    }

    // Action to logout from facebook & app
    const facebookLogout = () => {  
        window.FB.logout( response => { 
            console.log(response)
            setFacebookResponse ({})
            
        })
    }


    // Initial FB by JS SDK
    window.fbAsyncInit = async () => {
        await window.FB.init({
            appId      : process.env.REACT_APP_FACEBOOK_APP_ID,                     // App id from facebook
            cookie     : true,                                  // Enable cookies to allow the server to access the session.
            xfbml      : true,                                  // Parse social plugins on this webpage.
            version    : process.env.REACT_APP_FACEBOOK_APP_VERSION                                // Use this Graph API version for this call.
        })

        // await window.FB.getLoginStatus( response => {           // Called after the JS SDK has been initialized.
        //     if(response.authResponse) {
        //         statusChangeCallback(response)    
        //     } else { 
        //         return null
        //     }
        // })
    }
    
   
    
    return { 
        facebookLogin, 
        facebookLogout, 
        facebookResponse, 
    }
}
