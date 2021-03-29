import React from 'react'
import './Link.scss'

export default function Link({ children, url }) {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='Link'>
      {children}
    </a>
  )
}
