import React from 'react'
import PropTypes from 'prop-types'

import { AuthImgModule } from 'modules'
import { AuthRoutes } from 'routes'
import { useTranslate } from 'hooks'

const Auth = ({changeLanguage}) => {
    return (
        <div className='wrapper auth'>
            <div className='auth-modal'>
                <AuthRoutes 
                    changeLanguage={changeLanguage} 
                    useTranslate={useTranslate}
                    />
                <AuthImgModule />
            </div>
        </div>
    )
}
AuthRoutes.propTypes = {
    changeAccount: PropTypes.func
}
AuthRoutes.defaultProps = {
    changeAccount: () => {},
}

export default Auth
