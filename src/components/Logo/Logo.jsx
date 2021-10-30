import React from 'react'
import { Image } from 'react-bootstrap'

import Text from '../Text/Text'

import './Logo.scss'

export default function Logo({ title, img }) {
  return (
    <div className='text-center'>
      <Image src={img} className='logo-img' fluid />
      <Text className='mt-2'>{title}</Text>
    </div>
  )
}
