// Core
import React from 'react'
import PropTypes from 'prop-types'

// App
import { Button, Input } from 'stories'

// Module
import { paths } from '../../routes'
import { useForm } from '../../hooks'

const { login } = paths

const ResetForm = ({useTranslate}) => {
    const { translation: {
        reset: { title, buttons },
        base: { inputs }
    }} = useTranslate('auth', [['reset', true], ['base', true]])

    const { onChange, onSubmit, onBlur, validate } = useForm({})

    return (
        <form className='password-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <div className='input-group'>
                <Input 
                    type='password' 
                    id='password' 
                    autoComplete='off' 
                    placeholder={ inputs.password } 
                    validate={validate}
                    onBlur={onBlur}
                    onChange={onChange} />
                <Input 
                    type='password' 
                    id='confirm' 
                    autoComplete='off' 
                    placeholder={ inputs.confirm } 
                    validate={validate}
                    onBlur={onBlur}
                    onChange={onChange} />
            </div>                        

            <div className='btn-group'>
                <Button 
                    to={login} 
                    className='link-btn'
                >{ buttons.cancel }</Button>
                <Button 
                    type='submit' 
                    onClick={onSubmit} 
                >{ buttons.submit }</Button> 
            </div>

        </form> 
    )
}

ResetForm.propTypes = {
    useTranslate: PropTypes.func,
    
}
ResetForm.defaultProps = {
    useTranslate: () => {},
}

export default ResetForm
