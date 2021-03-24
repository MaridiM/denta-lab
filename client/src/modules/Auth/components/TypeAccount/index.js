// Core
import React from 'react'
import PropTypes from 'prop-types'

// Module
import { paths } from '../../routes'
import { patientIMG, dentistIMG } from '../../assets'
import { useTranslate } from '../../hooks'

// Component
import TypeAccountBtn  from './TypeAccountBtn'

const { register } = paths

const TypeAccount = () => {
    const { translation: {
        change: { title, patient, dentist },
    }} = useTranslate('auth', [['change', true]])

    return (            
        <section className='change-account__wrapper'>
            <h2 className='auth-modal-title'>{ title }</h2>

            <div className='change-account__items'>
                <TypeAccountBtn 
                    to={register.patient}
                    className='img' 
                    src={ patientIMG }
                    alt='Type Account'
                    >{ patient }</TypeAccountBtn>
                <TypeAccountBtn 
                    to={register.dentist.step_1}
                    className='img' 
                    src={ dentistIMG }
                    alt='Type Account'
                    >{ dentist }</TypeAccountBtn>
            </div>
        </section>    
    )
}

TypeAccount.propTypes = {
    title: PropTypes.string, 
}
TypeAccount.defaultProps = {
    title: ''
}

export default TypeAccount
