import React from 'react'
import PropTypes from 'prop-types'


import { Input, Button, Select, Facebook } from 'components'
import { routes } from 'routes'
import { GoogleSVG } from 'icons'
import { useForm, useTranslate } from 'hooks'


const { password: {forgot}, register: {changeAccount} } = routes
console.log(useTranslate)
const LoginForm = () => {
// const LoginForm = ({ useTranslate }) => {
    const { translation: {
        login: { title, selectList, buttons, links },
        base: { inputs }
    }} = useTranslate('auth', [['login', true], ['base', true]])

    const { onChange, onSubmit, onBlur, validate } = useForm({})



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
               
                <Button type='submit' className='btn-google'>
                    <GoogleSVG className='btn__img' />
                    { buttons.google }
                </Button>
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
