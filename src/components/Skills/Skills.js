import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import node from '../../assets/icons/node.png'
import java from '../../assets/icons/java.png'
import postgres from '../../assets/icons/postgres.png'
import js from '../../assets/icons/js.png'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import scss from '../../assets/icons/scss.png'
import express from '../../assets/icons/express.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import react from '../../assets/icons/react.png'
import jquery from '../../assets/icons/jquery.gif'
import typescript from '../../assets/icons/typescript.png'
import './Skills.scss'

export default function Skills() {
  return (
    <div id='skills' className='Skills'>
      <h1 className='pb-4'>Skills</h1>
      <Row style={{ overflowX: 'auto' }}>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <Row>
                <Col>
                  <Image src={node} className='skills-img mb-4' />
                </Col>
                <Col>
                  <Image src={typescript} className='skills-img mb-4' />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Image src={java} className='skills-img mb-4' />
                </Col>
                <Col>
                  <Image src={postgres} className='skills-img mb-4' />
                </Col>
              </Row>
            </Col>
          </Row>
          <h2 className='mt-2'>Backend</h2>
          <hr className='hr-color mb-5' />
        </Col>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <Row>
                <Col>
                  <Image src={js} className='skills-img mb-4' />
                </Col>
                <Col>
                  <Image src={html} className='skills-img mb-4' />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Image src={css} className='skills-img mb-4' />
                </Col>
                <Col>
                  <Image src={scss} className='skills-img mb-4' />
                </Col>
              </Row>
            </Col>
          </Row>
          <h2 className='mt-2'>Frontend</h2>
          <hr className='hr-color mb-5' />
        </Col>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <Row>
                <Col>
                  <Image src={express} className='skills-img mb-4' />
                </Col>
                <Col>
                  <Image src={react} className='skills-img react-logo mb-4' />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Image src={jquery} className='skills-img mb-4' />
                </Col>
                <Col>
                  <Image src={bootstrap} className='skills-img mb-4' />
                </Col>
              </Row>
            </Col>
          </Row>
          <h2 className='mt-2'>Frameworks</h2>
          <hr className='hr-color' />
        </Col>
      </Row>
    </div>
  )
}
