import React, { useEffect, useRef } from 'react'
import animationCallback from '../../utils/animationCallback'
import skilssArr from './skillsArr'
import Logo from './Logo/Logo'
import './Skills.scss'

export default function Skills() {
  const domElm = useRef()

  useEffect(() => animationCallback(domElm), [])

  const logoArr = skilssArr.map((elm, index) => (
    <Logo key={index} img={elm.img} title={elm.title} />
  ))

  return (
    <div ref={domElm} className='skills-grid slide-in align-left'>
      {logoArr}
    </div>
  )
}
