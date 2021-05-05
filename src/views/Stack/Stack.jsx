import React from 'react'

import Title from '../../components/Title/Title'
import Logo from '../../components/Logo/Logo'

import useStack from '../../hooks/useStack'

import './Stack.scss'

export default function Stack() {
  const stack = useStack()

  return (
    <div className='Stack slide-fade'>
      <Title>Stack</Title>
      <div className='grid'>
        {stack.map((elm, index) => (
          <Logo key={index} img={elm.img} title={elm.title} />
        ))}
      </div>
    </div>
  )
}
