import React from 'react'
import './Title.scss'

export default function Title({ children }) {
  return (
    <div className='Title mb-4'>
      <h2 className='text-left'>{children}</h2>
      <hr />
    </div>
  )
}
