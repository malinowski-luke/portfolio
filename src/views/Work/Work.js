import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Image, Col, Row } from 'react-bootstrap'
import Title from '../../components/Title/Title'
import animationCallback, { style } from '../../utils/animationCallback'
import projectsArr from '../../utils/projectsArr'
import './Work.scss'

export default function Work() {
  const work = useRef()
  useEffect(() => animationCallback(work), [])

  const projectsJSX = projectsArr.map((elm, index) => {
    return (
      <Col lg={3} className='mb-2' key={index}>
        <Link to={`/work/${index}`} className='work-item grow'>
          <Image src={elm.coverImage} fluid />
        </Link>
      </Col>
    )
  })

  return (
    <div ref={work} className={`Work ${style}`}>
      <div style={{ width: '100%' }}>
        <Title>Work</Title>
        <Row>{projectsJSX}</Row>
      </div>
    </div>
  )
}
