import React from 'react'
import './Link.scss'

const Link = ({ children, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="Link">
      {children}
    </a>
  )
}

export default Link
