import React, { useEffect, useRef } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import Title from '../Title/Title'
import githubLogo from '../../assets/icons/github.png'
import www from '../../assets/icons/www.png'
import projectsArr from '../../utils/projectsArr'
import animationCallback, { style } from '../../utils/animationCallback'
import './Project.scss'

export default function Project({ match, history }) {
  const project = useRef()

  useEffect(() => animationCallback(project), [])

  const projectInfo = projectsArr[match.params.index],
    { image, github, link, title, text } = projectInfo

  return (
    <div ref={project} className={style}>
      <Title>{title}</Title>
      <Row className='align-items-center'>
        <Col lg={6} className='mt-4 mt-lg-0'>
          <p className='mt-2 text-justify'>{text}</p>
          <div className='link-container mt-2'>
            {link && (
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <Image src={www} className='link-icon' fluid />
                <br />
                Live App
              </a>
            )}
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <Image src={githubLogo} className='link-icon' fluid />
              <br />
              GitHub Repo
            </a>
            <Button
              onClick={() => history.push('/work')}
              variant='outline-light'
            >
              Back
            </Button>
          </div>
        </Col>
        <Col lg={6}>
          <Image src={image} fluid />
        </Col>
      </Row>
    </div>
  )
}
