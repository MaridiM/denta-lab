import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


import { WarningSVG, SuccessSVG } from '../../assets/icons'
import './input.sass'


const Input = ({
    id, className, label, validate, autoComplete, noStyle, type, icon,  ...attrs
}) => { 
    const classes = classnames(
        !noStyle ? (type !== 'textarea' ? 'input' : 'textarea') : null,
        icon && 'input-icon',
        className, 
    )
    const fieldClasses = validate && !!validate[id] 
            ? validate[id].status 
                ? 'input-success'
                :  !validate[id].status && 'input-error'
            : null

    return (
        <div className='input-field'>
            { label && <label className='input-label' htmlFor={id}>{ label }</label> } 
            <div className={classes}>
                { (type !== 'textarea' && icon && !noStyle) && <span className='input-icon-img'>{ icon }</span> }
                {
                    type === 'textarea' 
                        ? (
                            <textarea
                                className={fieldClasses}
                                name={id}
                                id={id}
                                {...attrs}
                            ></textarea>
                        ) : (
                            <input 
                                className={fieldClasses}
                                autoComplete={autoComplete}
                                name={id}
                                id={id}
                                type={type}
                                {...attrs}
                            />
                    )
                
                }
                { 
                    type !== 'textarea' && !noStyle && validate && !!validate[id]
                        ?   !validate[id].status 
                            ? <span className='input-icon-status'>
                                <WarningSVG className="input-icon-status--error" />
                            </span> 
                            : validate[id].status && <span className='input-icon-status'>
                                <SuccessSVG className="input-icon-status--success" />
                            </span> 
                        : null
                }
            </div>
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    autoComplete: PropTypes.oneOf(['on', 'off']),
    label: PropTypes.string,
    error: PropTypes.object,
    noStyle: PropTypes.bool,
    type: PropTypes.string,
    onChange: PropTypes.func,
}
Input.defaultProps = {
    className: '',
    label: '',
    validate: {},
    autoComplete: 'on',
    noStyle: false,
    type: 'text',
    onChange: undefined,
}

export default Input
