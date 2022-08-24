import React from 'react'
import Text from '../Text/Text'
import Link from '../Link/Link'

import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">
      <Text>
        <Link url='https://github.com/malinowskil123'>Github</Link> |{' '}
        <Link url='https://www.linkedin.com/in/luke-malinowski-50328/'>
          Linkedin
        </Link>
      </Text>
    </div>
  )
}

export default Footer
