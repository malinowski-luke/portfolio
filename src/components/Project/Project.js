import React, { useEffect, useRef, useState, useContext } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Title from '../Title/Title'
import Table from '../Table/Table'
import animationCallback, { style } from '../../utils/animationCallback'
import './Project.scss'

export default function Project({ location }) {
  const projectRef = useRef()

  const { projectIndex } = location

  const [project, setProject] = useState({})
  const [index, setIndex] = useState(0)

  const getProject = async () => {
    try {
      const { data } = await axios.get(`/project/${index}`)
      setProject(data)
    } catch (error) {
      console.error('error fetching project: ' + error)
    }
  }

  useEffect(() => {
    if (projectIndex !== undefined) {
      setIndex(projectIndex)
      window.sessionStorage.setItem('index', projectIndex)
    } else {
      setIndex(+window.sessionStorage.getItem('index'))
    }
    getProject()
    animationCallback(projectRef)
  }, [])

  const { stack, image, github, link, title, text } = project

  return (
    <div ref={projectRef} className={`Project ${style}`}>
      <Title>{title}</Title>
      <Table stack={stack} link={link} github={github} />
      <Row className='align-items-center mt-2'>
        <Col lg={6} className='text-center'>
          <Image src={image} fluid />
        </Col>
        <Col lg={6} className='mt-4 mt-lg-0 px-lg-5'>
          <p className='text-justify'>{text}</p>
          <Link to='/work'>
            <Button variant='outline-secondary' block>
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}
