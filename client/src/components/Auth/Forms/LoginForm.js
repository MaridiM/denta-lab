import React from 'react'
import PropTypes from 'prop-types'
import { GoogleLogin } from 'react-google-login'

import { Input, Button, Select, Facebook } from 'components'
import { routes } from 'routes'
import { GoogleSVG } from 'icons'
import { useForm } from 'hooks'


const { password: {forgot}, register: {changeAccount} } = routes
const LoginForm = ({ useTranslate }) => {
    const { translation: {
        login: { title, selectList, buttons, links },
        base: { inputs }
    }} = useTranslate('auth', [['login', true], ['base', true]])

    const { onChange, onSubmit, onBlur, validate } = useForm({})

    const responseGoogle = (response) => {
        console.log(response)
    }
    return (
        <form className='login-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>
            
            <Input 
                type='email' 
                id='email' 
                onChange={onChange}
                onBlur={onBlur}
                validate={validate}
                placeholder={ inputs.email } />
            <Input 
                type='password' 
                id='password' 
                autoComplete='off' 
                onChange={onChange}
                onBlur={onBlur}
                validate={validate}
                placeholder={ inputs.password } />

            <div className='input-group'>
                <Select 
                    id='changeTypeAccount' 
                    defaultValue='Dentist' 
                    onChange={onChange}
                    list={ selectList } />

                <Button to={forgot}>{ links.forgot }</Button>
            </div>


            <div className='btn-group'>
                <Button to={changeAccount}>{ links.register }</Button>
                <Button 
                    type='submit'
                    onClick={onSubmit}
                >{ buttons.submit }</Button>
            </div>

            <div className='login-form__social'>
                <Facebook>{ buttons.facebook }</Facebook>
                <GoogleLogin
                    clientId="482241606181-2ph3qeu59dp7hju4curft47krnu0fugj.apps.googleusercontent.com"
                    render={renderProps => (
                        <Button 
                            className='btn-google'
                            onClick={renderProps.onClick}
                            >
                            <GoogleSVG className='btn__img' />
                            { buttons.google }
                        </Button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div> 
        </form> 
    )
}

LoginForm.propTypes = {
    useTranslate: PropTypes.func,
}
LoginForm.defaultProps = {
    useTranslate: () => {},
}

export default LoginForm
