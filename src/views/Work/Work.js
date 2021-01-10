import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Image, Col, Row } from 'react-bootstrap'
import Title from '../../components/Title/Title'
import shuffle from '../../utils/shuffle'
import './Work.scss'

export default function Work() {
  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    const myStorage = window.sessionStorage
    const cachedProjects = JSON.parse(myStorage.getItem('projects'))

    if (cachedProjects) {
      setProjects(cachedProjects)
    } else {
      try {
        const { data } = await axios.get('/projects')
        const shuffledProjects = shuffle(data)
        myStorage.setItem('projects', JSON.stringify(shuffledProjects))
        setProjects(shuffledProjects)
      } catch (error) {
        console.error('error fetching projects: ' + error)
      }
    }
  }

  useEffect(() => {
    getProjects()
  }, [])

  const projectsJSX = projects.map((project, index) => {
    return (
      <Col md={3} className='mb-2' key={index}>
        <Link to={`/work/${project.title}`} className='work-item grow'>
          <Image src={project.coverImage} fluid />
        </Link>
      </Col>
    )
  })

  return (
    <div className='Work slide-fade'>
      <div style={{ width: '100%' }}>
        <Title>Work</Title>
        <Row>{projectsJSX}</Row>
      </div>
    </div>
  )
}
