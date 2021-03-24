import React from 'react'

import Button from './Button'
import { DownloadSVG } from '../../assets/icons'


export default { 
    title: 'library/components/LInk',
    component: Button,
    argTypes: {}
}


export const Solid = (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button {...args} href='/#' className='btn-default' >Default</Button>
        <Button {...args} href='/#' className='btn-primary'>Primary</Button>
        <Button {...args} href='/#' className='btn-secondary'>Secondary</Button>
        <Button {...args} href='/#' className='btn-warning'>Warning</Button>
        <Button {...args} href='/#' className='btn-danger'>Danger</Button>
        <Button {...args} href='/#' className='btn-success'>Success</Button>
        <Button {...args} href='/#' className='btn-primary' disabled>Disabled</Button>
        <Button {...args} href='/#' className='btn-primary' icon={<DownloadSVG />} >Download</Button>
    </div>
)

export const Outline = (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        <Button {...args} href='/#' className='btn-default outline' >Default</Button>
        <Button {...args} href='/#' className='btn-primary outline'>Primary</Button>
        <Button {...args} href='/#' className='btn-secondary outline'>Secondary</Button>
        <Button {...args} href='/#' className='btn-warning outline'>Warning</Button>
        <Button {...args} href='/#' className='btn-danger outline'>Danger</Button>
        <Button {...args} href='/#' className='btn-success outline'>Success</Button>
        <Button {...args} href='/#' className='btn-primary outline' disabled>Disabled</Button>
        <Button {...args} href='/#' className='btn-primary outline' icon={<DownloadSVG />}>Download</Button>
    </div>
)

export const Size = (args) => (
    <div style={{ display: 'inline-block' }}>
        <Button {...args} href='/#' className='btn-primary' size='small'>Small</Button>
        <Button {...args} href='/#' className='btn-primary outline' size='small'>Small</Button>
        <Button {...args} href='/#' className='btn-warning' size='medium'>Medium</Button>
        <Button {...args} href='/#' className='btn-warning outline' size='medium'>Medium</Button>
        <Button {...args} href='/#' className='btn-danger' size='large'>Large</Button>
        <Button {...args} href='/#' className='btn-danger outline' size='large'>Large</Button>

        <div style={{ margin: '5px 0px', display: 'flex' }}>
            <Button {...args} href='/#' className='btn-primary square'>+</Button>
            <Button {...args} href='/#' className='btn-primary outline square'>+</Button>
            <Button {...args} href='/#' className='btn-danger circle'>+</Button>
            <Button {...args} href='/#' className='btn-danger outline circle'>+</Button>
        </div>
        <div style={{ margin: '5px 0px' }}>
            <Button {...args} href='/#' className='btn-primary fluid'>Fluid</Button>
        </div>
        <div style={{ margin: '5px 0px' }}>
        <Button {...args} href='/#' className='btn-primary outline fluid'>Fluid Outline</Button>
        </div>
    </div>
)