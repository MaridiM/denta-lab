import { useState } from 'react'

import { useValidation } from 'hooks'

export const useForm = ( initialState = {} ) => {
    const [ form, setForm ] = useState(initialState)
   
    const { validationInput, validationForm, validate } = useValidation()
    
    const onFocus = (e) => {
        console.log(e.target.focus)
    }
    
    const onBlur = (e) => {
        e.target.blur && validationInput(e, form)
    }

    const onChange = (e) => {
        validationInput(e, form)
        setForm(form => ({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {       
        validationForm(form)
    }


    return { 
        onChange, 
        onSubmit, 
        onFocus,
        onBlur,
        validate,
        form 
    }
}
