import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Textarea = ({
    className, id, label, error, placeholder, noStyle, ...attrs
}) => {
    const classes = classnames(
        !noStyle && 'textarea-field',
        error.status === 'success' && 'textarea-field-success',
        error.status === 'error' && 'textarea-field-error',
        className
    )

    return (
        <div className='textarea'>
            { label && <label className='textarea-label' htmlFor={id}>{ label }</label> } 
            <div className='textarea-wrapper'>
                <textarea 
                    id={id} 
                    name={id} 
                    className={classes}
                    placeholder={placeholder}
                    {...attrs}
                    ></textarea>
                { 
                    error.status 
                        ?   error.status  ===  'error' 
                                ? <span className='textarea-icon'>
                                    <img src='/assets/img/icons/warning.svg' alt='warning' />
                                </span> 
                                : <span className='textarea-icon'>
                                    <img src='/assets/img/icons/success.svg' alt='success' />
                                </span> 
                        : null
                }
            </div>
        </div>
    )
}

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    noStyle: PropTypes.bool,
    label: PropTypes.string,
    error: PropTypes.object,
}
Textarea.defaultProps = {
    className: '',
    placeholder: 'Write text',
    noStyle: false,
    label: '',
    error: {
        status: '',
        msg: 'Default status message'
    },
}

export default Textarea
