import React from 'react'

import Input from './Input'
import { UserSVG, AddressSVG } from '../../assets/icons'

export default { 
    title: 'library/components/TextField',
    component: Input,
    argTypes: {}
}


export const TextField = (args) => (
    <div style={{ display: 'flex' }}>
        <div style={{flexGrow: 1, textAlign: 'center'}}>
            <Input {...args} type='text' icon={<UserSVG />} id='fullname' placeholder='Fullname' />
            <Input {...args} type='text' icon={<AddressSVG />} id='address' placeholder='Address' validate={{ address: {status: false, message: 'Something wrong...'}}} />
            <Input {...args} type='email' id='email' placeholder='Email' />
            <Input {...args} type='password' id='password' placeholder='Password' />
            <Input {...args} type='text' id='error' value='Error' validate={{ error: {status: false, message: 'Something wrong...'}}}/>
            <Input {...args} type='text' id='success' value='Success' validate={{ success: {status: true, message: 'All is ok'}}} />
        </div>
        <div style={{flexGrow: 1, textAlign: 'center'}}>
            <Input {...args} type='textarea' id='body' placeholder='Type text ....' />
            <Input {...args} type='textarea' id='error-body' value='Error'  validate={{ 'error-body': {status: false, message: 'Something wrong...'}}} />
            <Input {...args} type='textarea' id='success-body' value='Success'  validate={{ 'success-body': {status: true, message: 'All is ok'}}} />
        </div>
    </div>
)