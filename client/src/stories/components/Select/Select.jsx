import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './select.sass'

const Select = ({ className, label, id, defaultValue, list, noStyle, ...attrs}) => {
    const classes = classnames( 
        noStyle ? 'no-style' : 'select-list',
        className,
    )
    return (
        <div className='select'>
            { label && <label className='select-label' htmlFor={id}>{ label }</label> } 
            <select 
                name={id}
                id={id} 
                className={classes} 
                defaultValue={defaultValue}
                style={attrs.width && {width: attrs.width}}
                {...attrs}
                >
                {
                    list.length >= 1
                        ? list.map( (item, i) => (
                            <option 
                                key={i}
                                className="select-item" 
                                value={item[0]}
                                >{item[1]}</option> 
                        ))
                        : null
                }
            </select>
        </div>
    )
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    list: PropTypes.array.isRequired,
    noStyle: PropTypes.bool,
}

Select.defaultProps = {
    className: '',
    label: '',
    noStyle: false,
}

export default Select
