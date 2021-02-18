import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { AuthFormModule } from 'modules'
import routes from './routes'
import {
    LoginForm,
    TypeAccount,
    RegisterPatientForm,
    RegisterDentistForm,
    ForgotForm,
    ResetForm,
    HelpForm,
} from 'components'
const {
    main,
    login,
    register: { changeAccount, patient, dentist }, 
    password: { forgot, reset},
    help
} = routes

const AuthRoutes = ({changeLanguage, useTranslate, location}) => {
    const { translation: {
        base: { authBtn }
    }} = useTranslate('auth', [['patient', true], ['base', true]])
    
    const { pathname } = location
    
    return (
         <Switch>
            <Route exact path={[main, login]}>
                <AuthFormModule 
                    component={LoginForm} 
                    changeLanguage={changeLanguage} 
                    useTranslate={useTranslate}
                    footer/>
            </Route>

            <Route exact path={changeAccount}>
                <AuthFormModule 
                    component={TypeAccount} 
                    changeLanguage={changeLanguage}
                    useTranslate={useTranslate}
                    type='change-account'
                    btnText={authBtn}
                    footer/>
            </Route>

            <Route exact path={patient}>
                <AuthFormModule 
                    component={RegisterPatientForm} 
                    changeLanguage={changeLanguage}
                    useTranslate={useTranslate}
                    type='register-patient'
                    btnText={authBtn}
                    footer/>
            </Route>

            <Route exact path={[dentist.step_1, dentist.step_2]}>
                <AuthFormModule 
                    component={RegisterDentistForm} 
                    changeLanguage={changeLanguage}
                    useTranslate={useTranslate}
                    type='register'
                    btnText={authBtn}
                    maxStep={2}
                    footer={Number(pathname.split('-')[1]) === 1 ? true : false} />
            </Route>
            
            <Route exact path={[forgot, reset]}>
                <AuthFormModule 
                    component={pathname === forgot ? ForgotForm : ResetForm}
                    changeLanguage={changeLanguage} 
                    useTranslate={useTranslate}
                    title={pathname === forgot ? 'Forgot password' : 'Reset password'} 
                    footer />
            </Route>

            <Route exact path={help}>
                <AuthFormModule 
                    component={HelpForm} 
                    changeLanguage={changeLanguage}
                    useTranslate={useTranslate} />
            </Route>
        </Switch>
    )
}

AuthRoutes.propTypes = {
    changeAccount: PropTypes.func,
    useTranslate: PropTypes.func,
}
AuthRoutes.defaultProps = {
    changeAccount: () => {},
    useTranslate: () => {},
}
export default withRouter(AuthRoutes)