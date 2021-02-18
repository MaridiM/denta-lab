import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input, Textarea } from 'components'
import { routes } from 'routes'
import { useForm } from 'hooks'

const { login } = routes

const HelpForm = ({ useTranslate }) => {
    const { translation: {
        help: { title, buttons },
        base: { inputs }
    }} = useTranslate('auth', [['help', true], ['base', true]])

    const { onChange, onSubmit, onBlur, validate } = useForm({})

    return (
        <form className='help-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <div className='input-group'>
                <Input 
                    type='email' 
                    id='email' 
                    placeholder={ inputs.email }
                    validate={ validate } 
                    onBlur={ onBlur } 
                    onChange={onChange} />
                <Textarea 
                    id='question' 
                    placeholder={ inputs.help } 
                    onChange={onChange} />
            </div>                        

            <div className='btn-group'>
                <Button to={login} className='link-btn'>{ buttons.cancel }</Button>
                <Button type='submit' onClick={onSubmit} >{ buttons.submit }</Button> 
            </div>

        </form> 
    )
}

HelpForm.propTypes = {
    useTranslate: PropTypes.func,
}
HelpForm.defaultProps = {
    useTranslate: () => {},
}

export default HelpForm
