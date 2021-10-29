import React from 'react'

import { Link } from 'react-router-dom'

import useAllProjects from '../../hooks/useAllProjects'

import { Image, Col, Row } from 'react-bootstrap'
import BaseLayout from '../../components/BaseLayout/BaseLayout'

import './Work.scss'

export default function Work() {
  const projects = useAllProjects()
  return (
    <BaseLayout className='Work' dataTestID='work'>
      <div style={{ width: '100%' }}>
        <Row>
          {projects.map((project, index) => {
            return (
              <Col md={4} className='mb-2' key={index}>
                <Link to={`/work/${project.title}`} className='work-item grow'>
                  <Image src={project.coverImage} fluid />
                </Link>
              </Col>
            )
          })}
        </Row>
      </div>
    </BaseLayout>
  )
}
