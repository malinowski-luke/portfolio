import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { slideIn } from '../../utils/slideIn'
import projectsArr from '../../utils/projectsArr'
import './Work.scss'

export default function Work() {
  useEffect(() => slideIn('work'), [])
  const projectsJSX = projectsArr.map((elm, index) => {
    return (
      <Link key={index} to={'/project/' + index}>
        <div className='work-item'>
          <div className='work-item-overlay'></div>
          <Image src={elm.coverImage} fluid />
        </div>
      </Link>
    )
  })
  return (
    <div id='work' className='slide-in align-left Work'>
      <div className='work-grid'>{projectsJSX}</div>
    </div>
  )
}
