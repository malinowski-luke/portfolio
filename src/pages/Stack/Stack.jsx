import React from 'react'

import useStack from '../../hooks/useStack'

import BaseLayout from '../../components/BaseLayout/BaseLayout'
import Logo from '../../components/Logo/Logo'

import './Stack.scss'

export default function Stack() {
  const stack = useStack()

  return (
    <BaseLayout dataTestID='stack'>
      <div className='grid'>
        {stack.map((elm, index) => (
          <Logo key={index} img={elm.img} title={elm.title} />
        ))}
      </div>
    </BaseLayout>
  )
}
