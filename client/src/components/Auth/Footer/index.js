import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useTranslation } from "react-i18next"

import { Button, Select } from 'components'
import { routes } from 'routes'
import { HelpSVG } from 'icons'

const { login } = routes

const Help = () => {
    const { t } = useTranslation('auth')
    const { help } = t('base', { returnObjects: true })

    return (
        <Button to={routes.help} className={'auth-modal__help'}>
            { help }
            <HelpSVG className={'auth-modal__help-img'} />
        </Button>
    )
}
const Footer = ({type, btnText, children, className, changeLanguage}) => {
    const classes = classnames(
        type === 'login' && 'login__footer', 
        type === 'register' && 'register__footer', 
        type === 'register-patient' && 'register__footer register__footer--flex-between', 
        type === 'change-account' && 'change-account__footer', 
        className
    )
    const btnClasses = classnames(
        type === 'change-account' && 'change-account__login',
        (type === 'register' || type === 'register-patient') && 'register__login',
    )
    return (
        <footer className={classes}>
             {
                (type === 'login' ||  type === 'help') &&
                    <> 
                        <Select 
                            id='changeLanguage' 
                            defaultValue='English'
                            width='auto'
                            onChange={(e) => changeLanguage(e.target.value)}
                            list={[
                                ['en', 'English'],
                                ['ru', 'Русский']
                            ]} />
                        <Help  />
                    </>
            }
            {
               ( type === 'register' || type === 'register-patient' ||  type === 'change-account' ) &&
                    <>
                        <Button 
                            to={login} 
                            className={btnClasses}
                            >{ btnText || children }</Button>
                        { type === 'register-patient' && <Help /> }
                        { type === 'change-account' &&  <Help /> }
                    </>
            } 
        </footer>
    )
}

Footer.propTypes = {
    type: PropTypes.string,
    btnText: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    changeLanguage: PropTypes.func,
}
Footer.defaultProps = {
    type: 'login',
    btnText: 'Default button',
    className: '',
    changeLanguage: () => {},
}

export default Footer
