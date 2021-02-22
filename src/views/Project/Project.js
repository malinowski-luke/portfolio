import React, { useEffect, useState } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Title from '../../components/Title/Title'
import Table from '../../components/Table/Table'
import Text from '../../components/Text/Text'
import './Project.scss'

export default function Project({ match }) {
  const projectTitle = match.params.project

  const [project, setProject] = useState({})

  useEffect(() => {
    const myStorage = window.sessionStorage
    const cachedProjects = JSON.parse(myStorage.getItem('projects'))

    const project = cachedProjects.find(
      (project) => project.title === projectTitle
    )

    setProject(project)
  }, [projectTitle])

  const { stack, image, github, link, title, text } = project

  return (
    <div className='Project slide-fade'>
      <Title>{title}</Title>
      <Table stack={stack} link={link} github={github} />
      <Row className='align-items-center mt-2'>
        <Col lg={6} className='text-center'>
          <Image src={image} fluid />
        </Col>
        <Col lg={6} className='mt-4 mt-lg-0 px-lg-5'>
          <Text>{text}</Text>
          <Link to='/work' className='mt-4'>
            <Button variant='outline-secondary' block>
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}
