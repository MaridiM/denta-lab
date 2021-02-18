import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Button = ({
    children, onClick, className, disabled, active, noStyle, ...attrs
}) => {
    const  onClickAction = e => {
        if (disabled) {
            e.preventDefault()
        } else {
            return onClick(e)
        }
    }

    const classes = classnames(
        noStyle 
            ? 'no-style'  
            : attrs.to ? 'link' : 'btn',
        className, 
        { active }
    )
    const Tag = attrs.to || attrs.href 
        ? Link 
        : (!attrs.type ? attrs.type = 'button' : attrs.type) && 'button'
    
    

    return (
        <Tag
            {...attrs}
            className={classes}
            disabled={disabled}
            style = {{
                width: attrs.width,
                height: attrs.height,
                ...attrs.style
            }}
            onClick={onClickAction}
        >{children}</Tag> 
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    noStyle: PropTypes.bool,
}
Button.defaultProps = {
    children: "Default Button",
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
    noStyle: false
}

export default Button