import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import routes from './routes'
import { 
    Auth
} from 'pages'

const { 
    main, 
    login, 
    register: {
        patient, 
        dentist: { step_1, step_2 },
        changeAccount
    }, 
    password: { forgot, reset },
    help
} = routes

const AuthRoutes = ({changeLanguage}) => {
    return (
        <Switch>
            <Route exact path={[ main, login, changeAccount, patient, step_1, step_2, forgot, reset, help ]}>
                <Auth changeLanguage={changeLanguage} />
            </Route>
        </Switch>
    )
}
AuthRoutes.propTypes = {
    changeAccount: PropTypes.func
}
AuthRoutes.defaultProps = {
    changeAccount: () => {},
}

export default AuthRoutes