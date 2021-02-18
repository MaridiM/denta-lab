import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input } from 'components'
import { routes } from 'routes'
import { useForm } from 'hooks'

const { login } = routes

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
                <Button to={login} className='link-btn'>{ back }</Button>
                <Button type='submit' onClick={onSubmit}>{ submit }</Button>
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
