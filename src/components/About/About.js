import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import guitar from '../../assets/guitar.JPG'
import './About.scss'

export default function About() {
  return (
    <div className='About' id='about'>
      <Row
        style={{ width: '80vw', color: 'white' }}
        className='align-items-center'
      >
        <Col lg={6}>
          <h1 className='about-header'>From music to code {'</>'}</h1>
          <p className='about-text mb-3 mb-md-0'>
            Audio Engineer turned Fullstack Web Developer, I found my passion
            for programming in an unconventional way. In college, I pursued the
            track of Audio Engineering - a musician at heart, I practiced
            producing and mixing audio for a variety of uses. Along the way, I
            found interest in personal projects that lead to the pivot of my
            career path. I self taught app development, practicing code that
            focused on UX, UI, and the best practices of programming.(is this
            how you would say that?)I started with Javascript, jQuery and
            Bootstrap. After the completion of personal apps and calculators, I
            moved onto a personal project called Jeep Things - a culmination of
            my self-taught skills. A full stack web application, Jeep Things
            solved a problem that was close to home - a site for car lovers and
            rebuilders to trade, sell, and buy auto parts - something that my
            family often did.
          </p>
        </Col>
        <Col lg={6}>
          <Image src={guitar} className='about-img' fluid />
        </Col>
      </Row>
    </div>
  )
}
