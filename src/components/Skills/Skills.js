import React, { useEffect } from 'react'
import { slideIn } from '../../utils/slideIn'
import skilssArr from './skillsArr'
import Logo from './Logo/Logo'
import './Skills.scss'

export default function Skills() {
  useEffect(() => {
    const container = document.getElementById('skills')
    slideIn(container)
    return () => slideIn(container)
  }, [])
  const logoArr = skilssArr.map((elm, index) => (
    <Logo key={index} img={elm.img} title={elm.title} />
  ))
  return (
    <div id='skills' className='skills-grid slide-in align-left'>
      {logoArr}
    </div>
  )
}
