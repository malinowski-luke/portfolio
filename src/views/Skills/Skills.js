import React from 'react'
import Title from '../../components/Title/Title'
import Logo from '../../components/Logo/Logo'
import skilssArr from './skillsArr'
import './Skills.scss'

export default function Skills() {
  const logoArr = skilssArr.map((elm, index) => (
    <Logo key={index} img={elm.img} title={elm.title} />
  ))

  return (
    <div className='Skills slide-fade'>
      <Title>Skills</Title>
      <div className='grid'>{logoArr}</div>
    </div>
  )
}
