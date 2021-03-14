import { Switch, Route } from 'react-router-dom'

import { Auth, Admin, Patient, Dentist, Payment } from 'modules'

import { paths } from './paths' 

const Routes = ({ changeLanguage }) => {
    return (
        <Switch>
            <Route exact path={ [ paths.main ] }>
                <Auth changeLanguage={ changeLanguage } />
            </Route>
            <Route path={ [ paths.auth ] }>
                <Auth changeLanguage={ changeLanguage } />
            </Route>

            
            <Route exact path={ paths.admin }>
                <Admin changeLanguage={ changeLanguage } />
            </Route>
            <Route exact path={ paths.dentist }>
                <Dentist changeLanguage={ changeLanguage } />
            </Route>
            <Route exact path={ paths.patient }>
                <Patient changeLanguage={ changeLanguage } />
            </Route>
            <Route exact path={ paths.payment }>
                <Payment changeLanguage={ changeLanguage } />
            </Route>
        </Switch>
    )
}

export default Routes
