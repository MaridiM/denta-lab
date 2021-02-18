import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Button } from 'components'
import { FacebookSVG } from 'icons'
import { useFacebook } from 'hooks'

const Facebook = ({ children, icon, className }) => {
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

Facebook.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string, 
    className: PropTypes.string
}

Facebook.defaultProps = {
    children: 'Continue with Facebook',
    icon: null,
    className: ''
}

export default Facebook
