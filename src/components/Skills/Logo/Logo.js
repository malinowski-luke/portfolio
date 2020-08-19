import React from 'react'
import { Image } from 'react-bootstrap'
import './Logo.scss'

export default function Logo(props) {
  const { title, img } = props
  return (
    <div>
      <Image src={img} className='logo-img' fluid />
      <h5 className='mt-2 logo-title'>{title}</h5>
    </div>
  )
}
