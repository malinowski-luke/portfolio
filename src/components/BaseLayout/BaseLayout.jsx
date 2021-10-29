import React from 'react'

import './BaseLayout.scss'

const BaseLayout = ({ dataTestID, children }) => {
  return (
    <div className='slide-fade' data-testid={dataTestID}>
      {children}
    </div>
  )
}

export default BaseLayout
