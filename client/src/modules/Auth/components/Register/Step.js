// Core
import React from 'react'
import PropTypes from 'prop-types'

// App
import { Button } from 'stories'
import { HelpSVG } from 'stories/assets/icons'

// Module
import { paths } from '../../routes'


const Step = ({step, maxStep, stepText}) => {
    return (
        <div className='register-form__step'>
            <div className='register-form__step-text'> 
                <span>{`${stepText.step} ${step} ${stepText.of} ${maxStep}`}</span>
                <Button to={paths.help} size={null} className='btn-default' ><HelpSVG className='register-form__step__help-img' /></Button>
            </div>
            <div className='register-form__step-progress'>
                <div className={`register-form__step-progress--step-${step}`}></div>
            </div>
        </div>
    )
}

Step.propTypes = {
    step: PropTypes.number, 
    maxStep: PropTypes.number,
    stepText: PropTypes.object,
}
Step.defaultProps = {
    step: 1, 
    maxStep: 2,
    stepText: {}
}

export default Step
