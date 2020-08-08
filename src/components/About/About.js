import React, { useEffect } from 'react'
import Contact from './Contact/Contact'
import { Row, Col, Image } from 'react-bootstrap'
import myImg from '../../assets/me.jpg'
import { slideIn } from '../../utils/slideIn'
import './About.scss'

export default function About() {
  useEffect(() => slideIn('about'), [])
  return (
    <Row id='about' className='slide-in align-left align-items-center '>
      <Col md={6} style={{ padding: '0px' }}>
        <Image src={myImg} className='about-img' fluid />
        <a
          href='https://www.youtube.com/watch?v=bYB1QKDv7HE'
          target='_blank'
          rel='noopener noreferrer'
          className='about-img-container about-link'
        >
          <h4>Click Me</h4>
        </a>
      </Col>
      <Col md={6}>
        <h3 className='mt-3  mt-lg-0'>From music to code {'</>'}</h3>
        <p className='mb-3 mb-md-0 text-justify about-text'>
          Audio Engineer turned Fullstack Web Developer, I found my passion for
          programming in an unconventional way. In college, I pursued the track
          of Audio Engineering - a musician at heart, I practiced producing and
          mixing audio for a variety of uses. Along the way, I found interest in
          web development that lead to the pivot of my career path. I started
          with Javascript, jQuery and Bootstrap. After the completion of
          personal apps and calculators, I moved onto a personal project called{' '}
          <a
            href='http://www.jeepthingsapp.com/#/'
            target='_blank'
            rel='noopener noreferrer'
            className='about-link'
          >
            jeepThings
          </a>{' '}
          - a culmination of my skills, JeepThings solved a problem that was
          close to home - a site for car lovers and rebuilders to trade, sell,
          and buy auto parts - something that my family often did. I am
          currently in New York seeking my next endeavor in web development.
        </p>
        <Contact />
      </Col>
    </Row>
  )
}
