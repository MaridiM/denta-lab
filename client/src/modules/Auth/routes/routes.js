// Core
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

// Module
import { paths } from './paths'
import Auth from '../auth'

const { 
    main, 
    auth,
    login, 
    register: {
        patient, 
        dentist: { step_1, step_2 },
        changeAccount
    }, 
    password: { forgot, reset },
    help
} = paths

const Routes = ({changeLanguage}) => {
    return (
        <Switch>
            <Route exact path={[ main, auth, login, changeAccount, patient, step_1, step_2, forgot, reset, help ]}>
                <Auth changeLanguage={changeLanguage} />
            </Route>
        </Switch>
    )
}
Routes.propTypes = {
    changeAccount: PropTypes.func
}
Routes.defaultProps = {
    changeAccount: () => {},
}

export default Routes