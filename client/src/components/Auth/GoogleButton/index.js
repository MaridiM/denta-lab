import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { GoogleLogin  } from 'react-google-login'


import { Button } from 'components'
import { GoogleSVG } from 'icons'
import { useGoogle } from 'hooks'

const GoogleButton = ({ children, className, icon, status }) => {
    const { googleLogin } = useGoogle()
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
                <Button 
                    className={classnames('btn-google', className)}
                    onClick={renderProps.onClick}
                    >
                    { icon ? icon :  <GoogleSVG className='btn__img' /> }
                    { children }
                </Button>
            )}
            onSuccess={googleLogin}
            onFailure={googleLogin}
            cookiePolicy={'single_host_origin'}
        />
    )
}

GoogleButton.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string, 
    className: PropTypes.string
}

GoogleButton.defaultProps = {
    children: 'Continue with Google',
    icon: null,
    className: ''
}

export default GoogleButton

