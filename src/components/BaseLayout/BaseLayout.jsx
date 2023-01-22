import React from 'react'
import vhCheck from 'vh-check'

import './BaseLayout.scss'

const BaseLayout = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const checkVh = vhCheck()
  return <div className="base-layout">{children}</div>
}

export default BaseLayout
