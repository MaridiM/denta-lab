// Core
import React from 'react'
import PropTypes from 'prop-types'

// App
import { Button, Input } from 'stories'

// Module
import { paths } from '../../routes'
import { useForm } from '../../hooks'

const { login } = paths

const ForgotForm = ({ useTranslate }) => {
    const { translation: {
        forgot: { title, info, buttons: { back, submit} },
        base: { inputs }
    }} = useTranslate('auth', [['forgot', true], ['base', true]])

    const { onChange, onSubmit, onBlur, validate } = useForm({})
    
    return (
        
        <form className='password-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>
            <p className='password-info'>{ info }</p>
            
            <Input 
                type='email' 
                id='email' 
                placeholder={ inputs.email } 
                validate={ validate }
                onBlur={ onBlur }
                onChange={ onChange } />

            <div className='btn-group'>
                <Button to={login} className='btn-link'>{ back }</Button>
                <Button type='submit' className='btn-primary' onClick={onSubmit}>{ submit }</Button>
            </div>

        </form>
    )
}

ForgotForm.propTypes = {
    useTranslate: PropTypes.func,

}
ForgotForm.defaultProps = {
    useTranslate: () => {},
}

export default ForgotForm
