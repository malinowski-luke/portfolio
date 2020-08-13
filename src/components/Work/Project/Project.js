import React, { useEffect, useRef } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import githubLogo from '../../../assets/icons/github.png'
import www from '../../../assets/icons/www.png'
import projectsArr from '../../../utils/projectsArr'
import { slideIn } from '../../../utils/slideIn'
import './Project.scss'

export default function Project({ match, history }) {
  const parent = useRef()

  useEffect(() => {
    const parentCleanUp = { ...parent }
    slideIn(parentCleanUp.current)
    return () => {
      slideIn(parentCleanUp.current)
    }
  }, [])

  const projectInfo = projectsArr[match.params.index],
    { image, github, link, title, text } = projectInfo

  return (
    <Row ref={parent} className='align-left slide-in align-items-center'>
      <Col lg={6}>
        <Image src={image} fluid />
      </Col>
      <Col lg={6} className='mt-4 mt-lg-0'>
        <h2>
          <strong>{title}</strong>
        </h2>
        <p className='mt-2 app-text'>{text}</p>
        <div className='link-container mt-2'>
          {link ? (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <Image src={www} className='link-icon' fluid />
              <br />
              Live App
            </a>
          ) : null}
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <Image src={githubLogo} className='link-icon' fluid />
            <br />
            GitHub Repo
          </a>
          <Button onClick={() => history.goBack()} variant='outline-light'>
            Back
          </Button>
        </div>
      </Col>
    </Row>
  )
}
