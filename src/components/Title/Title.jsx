import React from 'react'
import './Title.scss'

export default function Title({ className, children, onClick }) {
  return (
    <div {...(onClick && { onClick })}>
      <h2 className={`Title mb-4 ${className}`}>{children}</h2>
    </div>
  )
}
