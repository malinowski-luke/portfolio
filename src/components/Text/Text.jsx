import React from 'react'

import './Text.scss'

const Text = ({ className, children }) => {
  return <p className={`Text mb-3 ${className}`}>{children}</p>
}

export default Text
