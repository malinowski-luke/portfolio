import React, { useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import githubLogo from '../../assets/icons/github.png'
import www from '../../assets/icons/www.png'
import projectsArr from '../../utils/projectsArr'
import { slideIn } from '../../utils/slideIn'
import './Project.scss'

export default function Project({ match }) {
  const projectInfo = projectsArr[match.params.index],
    { image, github, link, title, text } = projectInfo
  useEffect(() => slideIn('project'), [])
  return (
    <Row id='project' className='align-left slide-in align-items-center'>
      <Col lg={6}>
        <Image src={image} fluid />
      </Col>
      <Col lg={6} className='project-info mt-4 mt-lg-0'>
        <h2>
          <strong>{title}</strong>
        </h2>
        <p>{text}</p>
        <div className='link-container'>
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
        </div>
      </Col>
    </Row>
  )
}
