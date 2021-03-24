import React from 'react'

import Button from './Button'
import { DownloadSVG } from '../../assets/icons'


export default { 
    title: 'library/components/Button',
    component: Button,
    argTypes: {}
}


export const Solid = (args) => (
    <div style={{ display: 'inline-block' }}>
        <Button {...args} className='btn-default' >Default</Button>
        <Button {...args} className='btn-primary'>Primary</Button>
        <Button {...args} className='btn-secondary'>Secondary</Button>
        <Button {...args} className='btn-warning'>Warning</Button>
        <Button {...args} className='btn-danger'>Danger</Button>
        <Button {...args} className='btn-success'>Success</Button>
        <Button {...args} className='btn-primary' disabled>Disabled</Button>
        <Button {...args} className='btn-primary' icon={<DownloadSVG />} >Download</Button>
    </div>
)

export const Outline = (args) => (
    <div style={{ display: 'inline-block' }}>
        <Button {...args} className='btn-default outline' >Default</Button>
        <Button {...args} className='btn-primary outline'>Primary</Button>
        <Button {...args} className='btn-secondary outline'>Secondary</Button>
        <Button {...args} className='btn-warning outline'>Warning</Button>
        <Button {...args} className='btn-danger outline'>Danger</Button>
        <Button {...args} className='btn-success outline'>Success</Button>
        <Button {...args} className='btn-primary outline' disabled>Disabled</Button>
        <Button {...args} className='btn-primary outline' icon={<DownloadSVG />}>Download</Button>
    </div>
)

export const Size = (args) => (
    <div style={{ display: 'inline-block' }}>
        <Button {...args} className='btn-primary' size='small'>Small</Button>
        <Button {...args} className='btn-primary outline' size='small'>Small</Button>
        <Button {...args} className='btn-warning' size='medium'>Medium</Button>
        <Button {...args} className='btn-warning outline' size='medium'>Medium</Button>
        <Button {...args} className='btn-danger' size='large'>Large</Button>
        <Button {...args} className='btn-danger outline' size='large'>Large</Button>

        <div style={{ margin: '5px 0px', display: 'flex' }}>
            <Button {...args} className='btn-primary square'>+</Button>
            <Button {...args} className='btn-primary outline square'>+</Button>
            <Button {...args} className='btn-danger circle'>+</Button>
            <Button {...args} className='btn-danger outline circle'>+</Button>
        </div>
        <div style={{ margin: '5px 0px' }}>
            <Button {...args} className='btn-primary fluid'>Fluid</Button>
        </div>
        <div style={{ margin: '5px 0px' }}>
        <Button {...args} className='btn-primary outline fluid'>Fluid Outline</Button>
        </div>
    </div>
)