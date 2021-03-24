import React from 'react'
import PropTypes from 'prop-types'

import { Routes } from './routes'

import './styles/index.sass'

const Auth = ({changeLanguage}) => {
    return (
        <div className='auth'>
            <Routes changeLanguage={ changeLanguage } />
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