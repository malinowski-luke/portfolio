import React from 'react'
import { Image } from 'react-bootstrap'
import './Logo.scss'

export default function Logo(props) {
  const { title, img } = props
  return (
    <div>
      <Image
        src={img}
        // added in react-logo class to spin if title === 'React'
        className={`skills-img ${title === 'React' ? 'react-logo' : ''}`}
        fluid
      />
      <h4 className='mt-2'>{title}</h4>
    </div>
  )
}
