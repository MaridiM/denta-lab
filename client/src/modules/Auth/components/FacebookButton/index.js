// Core
import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

// App
import { Button } from 'stories'
import { FacebookSVG } from 'stories/assets/icons'

// Module
import { useFacebook } from '../../hooks'

const FacebookButton = ({ children, icon, className }) => {
    const { facebookLogin } = useFacebook()  
    
    return (
        <Button 
            className={classnames('btn-facebook', className)} 
            onClick={facebookLogin}
            >
            { icon ? icon : <FacebookSVG className='btn__img' /> }
            { children }
        </Button>
    )
}

FacebookButton.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string, 
    className: PropTypes.string
}

FacebookButton.defaultProps = {
    children: 'Continue with Facebook',
    icon: null,
    className: ''
}

export default FacebookButton
