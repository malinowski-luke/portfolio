import React from 'react'
import Text from '../Text/Text'
import Link from '../Link/Link'

import './Footer.scss'

const Footer = (props) => {
  return (
    <div className='Footer'>
      <Text>
        Luke Malinowski © {new Date().getFullYear()} |{' '}
        <Link url='mailto:malinowski.luke123@gmail.com'>Contact</Link> |{' '}
        <Link url='https://github.com/malinowskil123'>Github</Link>
      </Text>
    </div>
  )
}

export default Footer
