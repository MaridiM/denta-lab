import React from 'react'
import classnames from 'classnames'

const InputSpinner = ({className}) => (
    <div className={classnames('lds-ring', className)} >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
export default InputSpinner
