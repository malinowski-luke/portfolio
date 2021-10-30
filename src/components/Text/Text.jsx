import React from 'react'

import './Text.scss'

export default function Text({ className, children }) {
  return <p className={`Text mb-3 ${className}`}>{children}</p>
}
