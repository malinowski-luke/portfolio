import React, { useEffect, useRef } from 'react'
import { slideIn } from '../../utils/slideIn'
import skilssArr from './skillsArr'
import Logo from './Logo/Logo'
import './Skills.scss'

export default function Skills() {
  const parent = useRef()

  useEffect(() => {
    const parentCleanUp = { ...parent }
    slideIn(parentCleanUp.current)
    return () => {
      slideIn(parentCleanUp.current)
    }
  }, [])

  const logoArr = skilssArr.map((elm, index) => (
    <Logo key={index} img={elm.img} title={elm.title} />
  ))

  return (
    <div ref={parent} className='skills-grid slide-in align-left'>
      {logoArr}
    </div>
  )
}
