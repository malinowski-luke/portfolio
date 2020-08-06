import React, { useEffect } from 'react'
import { slideIn } from '../../utils/slideIn'
import skilssArr from './skillsArr'
import Logo from './Logo/Logo'
import './Skills.scss'

export default function Skills() {
  useEffect(() => slideIn('skills'), [])
  const logoArr = skilssArr.map((elm, index) => (
    <Logo key={index} img={elm.img} title={elm.title} />
  ))
  return (
    <div id='skills' className='skills-grid slide-in align-left'>
      {logoArr}
    </div>
  )
}
