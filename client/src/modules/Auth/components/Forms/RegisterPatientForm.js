// Core 
import React from 'react'
import PropTypes from 'prop-types'

// App 
import { Input, Button} from 'stories'

// Module 
import { useForm } from '../../hooks'

const RegisterPatientForm = ({ useTranslate }) => {
    const { translation: {
        patient: { title, buttons },
        base: { inputs }
    }} = useTranslate('auth', [['patient', true], ['base', true]])

    const { onChange, onSubmit, onBlur, validate } = useForm({})

    return (
        <form className='register-form' method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <div className='input-group'>
                <Input 
                    type='text' 
                    id='fullname' 
                    placeholder={ inputs.fullname } 
                    validate={ validate }
                    onBlur={ onBlur }
                    onChange={onChange}/>
                <Input 
                    type='email' 
                    id='email' 
                    placeholder={ inputs.email } 
                    validate={ validate }
                    onBlur={ onBlur }
                    onChange={onChange} />
                <Input 
                    type='phone' 
                    id='phone' 
                    placeholder={ inputs.phone } 
                    validate={ validate }
                    onBlur={ onBlur }
                    onChange={onChange} />
                <Input 
                    type='password' 
                    id='password' 
                    autoComplete='off' 
                    placeholder={ inputs.password } 
                    validate={ validate }
                    onBlur={ onBlur }
                    onChange={onChange} />
                <Input 
                    type='password' 
                    id='confirm' 
                    autoComplete='off' 
                    placeholder={ inputs.confirm } 
                    validate={ validate }
                    onBlur={ onBlur }
                    onChange={onChange} />
            </div>

            <Button 
                type='submit' 
                className='btn-primary fluid' 
                onClick={onSubmit}>{ buttons.submit }</Button>
        </form> 
    )
}
RegisterPatientForm.propTypes = {
    useTranslate: PropTypes.func,
}
RegisterPatientForm.defaultProps = {
    useTranslate: () => {},
}

export default RegisterPatientForm
