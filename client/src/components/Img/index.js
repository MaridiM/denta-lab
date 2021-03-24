import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Img = ({className, src, alt} ) => {
    return (
        <div className={classnames(className)}>
            <img src={src} alt={alt} />
        </div>
    )
}

Img.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
}

Img.defaultProps = {
    className: '',
    src: '',
    alt: ''
}

export default Img
