import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import "./button.sass"


const Button = ({ 
    children, onClick, icon, className, size, disabled, noStyle, ...attrs 
}) => {
    const classes = classnames( 
        noStyle 
            ? 'no-style'  
            : attrs.to || attrs.href ? 'btn-link' : 'btn',
        noStyle && (size = null),
        size,
        icon && 'btn-icon', 
        className 
    )
    const  onClickAction = e => {
        if (disabled) {
            e.preventDefault()
        } else {
            return onClick(e)
        }
    }
     const Tag = attrs.to 
        ? Link 
        : attrs.href ? 'a' 
            : (!attrs.type ? attrs.type = 'button' : attrs.type) && 'button'

    return (
        <Tag 
            className={classes} 
            disabled={disabled} 
            onClick={onClickAction} 
            {...attrs}
        >
            { icon && <div className="btn-icon-img">{icon}</div> }
            { children }
        </Tag>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}
Button.defaultProps = {
    children: 'Button',
    className: 'btn-primary',
    size: 'medium',
    icon: null,
    onClick: () => {},
    disabled: false
}


export default Button
