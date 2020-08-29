import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import animationCallback, { style } from '../../utils/animationCallback'
import projectsArr from '../../utils/projectsArr'
import './Work.scss'

export default function Work() {
  const domElm = useRef()
  useEffect(() => animationCallback(domElm), [])

  const projectsJSX = projectsArr.map((elm, index) => {
    return (
      <Link key={index} to={`/work/${index}`}>
        <div className='work-item'>
          <div className='work-item-overlay'></div>
          <Image src={elm.coverImage} fluid />
        </div>
      </Link>
    )
  })

  return (
    <div ref={domElm} className={`Work ${style}`}>
      <div className='work-grid'>{projectsJSX}</div>
    </div>
  )
}
