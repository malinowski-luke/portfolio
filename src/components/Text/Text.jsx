import React from 'react'
import './Text.scss'

export default function Text({ children }) {
  return <p className='Text mb-3 text-justify '>{children}</p>
}
