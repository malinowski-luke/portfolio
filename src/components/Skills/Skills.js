import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './Skills.scss'
import node from '../../assets/node.png'
import java from '../../assets/java.png'
import mssql from '../../assets/mssql.png'
import postgres from '../../assets/postgres.png'
import js from '../../assets/js.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import scss from '../../assets/scss.png'
import express from '../../assets/express.png'
import bootstrap from '../../assets/bootstrap.png'
import react from '../../assets/react.png'
import jquery from '../../assets/jquery.gif'

export default function Skills() {
  return (
    <div id='skills'className='Skills'>
      <h1 className='skills-header pb-4'>Skills</h1>
      <Row style={{ overflowX: 'auto'}}>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <Row>
                <Col>
                  <Image src={node} className='skills-img mb-4' />
                </Col>
                <Col>
                  <Image src={java} className='skills-img mb-4' />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Image src={postgres} className='skills-img mb-4' />
                </Col>
                <Col>
                  <Image src={mssql} className='skills-img mb-4' />
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
