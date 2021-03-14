// Core
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// App
import { Img } from 'components/'
import { Button } from 'stories'


const TypeAccountBtn = ({className, src, alt, children, to }) => {
    return (
        <Button 
            className='change-account__item'
            to={to}
            noStyle>
            <Img 
                className={classnames(className)} 
                src={src} alt={alt} />
            <span>{ children }</span>
        </Button>
    )
}

TypeAccountBtn.propTypes = {
    className: PropTypes.string, 
    src: PropTypes.string, 
    alt: PropTypes.string, 
    children: PropTypes.node,
    onClick: PropTypes.func
}
TypeAccountBtn.defaultProps = {
    className: '', 
    src: '', 
    alt: '', 
    onClick: () => {}
}

export default TypeAccountBtn
