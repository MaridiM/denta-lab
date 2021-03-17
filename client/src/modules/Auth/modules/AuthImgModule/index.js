// Core
import React from 'react'
import { withRouter } from 'react-router-dom'

// Module
import { loginIMG, registerIMG, forgotPasswordIMG, helpIMG } from '../../assets'
import { ImgWrapper } from '../../components'
import { paths } from '../../routes'

const {
    main,
    auth,
    login,
    register: { changeAccount, patient, dentist }, 
    password: { forgot, reset},
    help
} = paths

const AuthImgModule = ({ location }) => {
    const { pathname } = location

    return (
        <>  
            { 
                (pathname === main || pathname === auth || pathname === login) 
                    && <ImgWrapper src={ loginIMG } alt='Login' />
            }
            { 
                (pathname === changeAccount || pathname === patient || pathname === dentist.step_1 || pathname === dentist.step_2) 
                    && <ImgWrapper 
                            className={ pathname === changeAccount ? '--change-account' : '--register'}
                            src={ registerIMG }
                            alt='Register' />
            }
            { 
                (pathname === forgot || pathname === reset) 
                    && <ImgWrapper src={ forgotPasswordIMG } alt='Forgot&Reset'/>
            }
            { 
                (pathname === help) 
                    && <ImgWrapper src={ helpIMG } alt='Help' />
            }
            
        </>
    )
}
export default withRouter(AuthImgModule)
