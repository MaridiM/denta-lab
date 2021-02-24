import React from 'react'
import PropTypes from 'prop-types'

import { Input, Button, Select, FacebookButton, GoogleButton } from 'components'
import { routes } from 'routes'
import { useForm, useWindowSize } from 'hooks'


const { password: {forgot}, register: {changeAccount} } = routes
const LoginForm = ({ useTranslate }) => {
    const { translation: {
        login: { title, selectList, buttons, links },
        base: { inputs }
    }} = useTranslate('auth', [['login', true], ['base', true]])

    const { onChange, onSubmit, onBlur, validate } = useForm({})
    const { windowSize } = useWindowSize()

    const compareSize = (content) => {
        return windowSize.width < 1366 && windowSize.width > 1024 
            ? content.split(' ')[content.split(' ').length - 1] 
            : content 
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
                    // type='submit'
                    onClick={onSubmit}
                >{ buttons.submit }</Button>
            </div>

            <div className='login-form__social'>
                <FacebookButton>{ compareSize(buttons.facebook) }</FacebookButton>
                <GoogleButton>{ compareSize(buttons.google) }</GoogleButton>
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
