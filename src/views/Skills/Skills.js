import React, { useEffect, useRef } from 'react'
import Title from '../../components/Title/Title'
import Logo from '../../components/Logo/Logo'
import animationCallback, { style } from '../../utils/animationCallback'
import skilssArr from './skillsArr'
import './Skills.scss'

export default function Skills() {
  const skills = useRef()

  useEffect(() => animationCallback(skills), [])

  
  const logoArr = skilssArr.map((elm, index) => (
    <Logo key={index} img={elm.img} title={elm.title} />
  ))

  return (
    <div ref={skills} className={`${style} Skills`}>
      <Title>Skills</Title>
      <div className='grid'>{logoArr}</div>
    </div>
  )
}
