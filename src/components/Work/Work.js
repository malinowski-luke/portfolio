import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { slideIn } from '../../utils/slideIn'
import projectsArr from '../../utils/projectsArr'
import './Work.scss'

export default function Work() {
  const parent = useRef()

  useEffect(() => {
    const parentCleanUp = { ...parent }
    slideIn(parentCleanUp.current)
    return () => {
      slideIn(parentCleanUp.current)
    }
  }, [])

  const projectsJSX = projectsArr.map((elm, index) => {
    return (
      <Link key={index} to={'/work/' + index}>
        <div className='work-item'>
          <div className='work-item-overlay'></div>
          <Image src={elm.coverImage} fluid />
        </div>
      </Link>
    )
  })

  return (
    <div ref={parent} className='slide-in align-left Work'>
      <div className='work-grid'>{projectsJSX}</div>
    </div>
  )
}
