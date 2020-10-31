import React from 'react'
import { Image } from 'react-bootstrap'
import './Logo.scss'

export default function Logo(props) {
  const { title, img } = props
  return (
    <div className='Logo text-center'>
      <Image src={img} className='logo-img' fluid />
      <p className='mt-2 logo-title'>{title}</p>
    </div>
  )
}
