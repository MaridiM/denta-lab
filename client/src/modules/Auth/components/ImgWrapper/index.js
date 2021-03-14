// Core
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// App
import { Img } from 'components'

const ImgWrapper = ({src, alt, className}) => {
    return (
        <section className='image-wrapper'>
            <Img 
                className={classnames(`image-wrapper__img${className}`)}
                src={src}
                alt={alt}
            />
        </section> 
    )
}

ImgWrapper.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}
ImgWrapper.defaultProps = {
    src: '',
    alt: 'Image',
    className: ''
}

export default ImgWrapper
