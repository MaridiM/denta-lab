// Core
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// Module
import { paths } from '../../routes'
import { Footer } from '../../components'

const {
    main,
    auth,
    login,
    register: { changeAccount, patient, dentist }, 
    password: { forgot, reset},
    help
} = paths

const AuthFormModule = ({
    component: Component, 
    title, 
    type, 
    btnText, 
    footer, 
    maxStep, 
    changeLanguage,
    useTranslate,
}) => {
    
    const { pathname } = document.location

    const classes = classnames(
        (pathname === main || pathname === auth || pathname === login) && 'login',
        (pathname === forgot || pathname === reset ) && 'password',
        (pathname === patient || pathname === dentist.step_1 || pathname === dentist.step_2) && 'register',
        pathname === changeAccount && 'change-account',
        pathname === help && 'help',
    )
    
    return (
        <section className={classes} >
            <Component 
                title={title} 
                step={Number(pathname.split('-')[1])}
                maxStep={maxStep}
                useTranslate={useTranslate}
                />
            { footer && <Footer type={type} btnText={btnText} changeLanguage={changeLanguage} /> }
        </section> 
    )
}

AuthFormModule.propTypes = {
    component: PropTypes.func.isRequired,  
    title: PropTypes.string, 
    type: PropTypes.string, 
    btnText: PropTypes.string, 
    maxStep: PropTypes.number, 
    footer: PropTypes.bool,
    changeLanguage: PropTypes.func,
    useTranslate: PropTypes.func,
}
AuthFormModule.defaultProps = {
    title: '', 
    btnText: '', 
    footer: false,
    maxStep: 2, 
    changeLanguage: () => {},
    useTranslate: () => {},
}

export default AuthFormModule
