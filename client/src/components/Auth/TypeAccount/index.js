import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import TypeAccountBtn  from './TypeAccountBtn'
import { routes } from 'routes'

const { register } = routes

const TypeAccount = () => {
    const { t } = useTranslation('auth')
    const { title, patient, dentist } = t('change', { returnObjects: true })

    return (            
        <section className='change-account__wrapper'>
            <h2 className='auth-modal-title'>{ title }</h2>

            <div className='change-account__items'>
                <TypeAccountBtn 
                    to={register.patient}
                    className='img' 
                    src='/assets/img/templates/patient.jpg' 
                    alt='Type Account'
                    >{ patient }</TypeAccountBtn>
                <TypeAccountBtn 
                    to={register.dentist.step_1}
                    className='img' 
                    src='/assets/img/templates/dentist.png' 
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
