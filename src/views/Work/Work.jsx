import React from 'react'

import { Link } from 'react-router-dom'
import { Image, Col, Row } from 'react-bootstrap'
import Title from '../../components/Title/Title'

import useAllProjects from '../../hooks/useAllProjects'

import './Work.scss'

export default function Work() {
  const projects = useAllProjects()
  return (
    <div className='Work slide-fade' data-testid='work'>
      <div style={{ width: '100%' }}>
        <Title>Work</Title>
        <Row>
          {projects.map((project, index) => {
            return (
              <Col md={3} className='mb-2' key={index}>
                <Link to={`/work/${project.title}`} className='work-item grow'>
                  <Image src={project.coverImage} fluid />
                </Link>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}
