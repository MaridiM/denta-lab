import React from 'react'
import { ImgWrapper } from 'components'
import { routes } from 'routes'
const {
    main,
    login,
    register: { changeAccount, patient, dentist }, 
    password: { forgot, reset},
    help
} = routes

const AuthImgModule = () => {
    const { pathname } = document.location
    return (
        <>  
            { 
                (pathname === main || pathname === login) 
                    && <ImgWrapper src='/assets/img/templates/login.jpg' alt='Login' />
            }
            { 
                (pathname === changeAccount || pathname === patient || pathname === dentist.step_1 || pathname === dentist.step_2) 
                    && <ImgWrapper 
                            className={ pathname === changeAccount ? '--change-account' : '--register'}
                            src='/assets/img/templates/register.png' 
                            alt='Register' />
            }
            { 
                (pathname === forgot || pathname === reset) 
                    && <ImgWrapper src='/assets/img/templates/forgot-password.png' alt='Forgot&Reset'/>
            }
            { 
                (pathname === help) 
                    && <ImgWrapper src='/assets/img/templates/help.jpg' alt='Help' />
            }
            
        </>
    )
}
export default AuthImgModule
