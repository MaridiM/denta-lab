// Core
import React from 'react'
import PropTypes from 'prop-types'

// Module
import { AuthImgModule } from './modules'
import { AuthRoutes } from './routes'
import { useTranslate } from './hooks'

const Auth = ({changeLanguage}) => {
    return (
        <div className='auth-modal'>
            <div className='auth-modal-content'>
                <AuthRoutes 
                    changeLanguage={changeLanguage} 
                    useTranslate={useTranslate}
                    />
                <AuthImgModule />
            </div>
        </div>
    )
}
Auth.propTypes = {
    changeAccount: PropTypes.func
}
Auth.defaultProps = {
    changeAccount: () => {},
}

export default Auth
