import React, { useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import slideIn from '../../utils/slideIn'
import myImg from '../../assets/me.jpg'
import './About.scss'

export default function About() {
  useEffect(() => slideIn(), [])
  return (
    <div className='About' id='about'>
      <Row
        style={{ color: 'white', paddingTop: '14vh' }}
        className='slide-in align-left  align-items-center container body-content'
      >
        <Col lg={6} style={{ padding: '0px' }}>
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
        <Col lg={6}>
          <h3 className='mt-3  mt-lg-0'>From music to code {'</>'}</h3>
          <p className='mb-3 mb-md-0 text-justify about-p'>
            Audio Engineer turned Fullstack Web Developer, I found my passion
            for programming in an unconventional way. In college, I pursued the
            track of Audio Engineering - a musician at heart, I practiced
            producing and mixing audio for a variety of uses. Along the way, I
            found interest in web development that lead to the pivot of my
            career path. I started with Javascript, jQuery and Bootstrap. After
            the completion of personal apps and calculators, I moved onto a
            personal project called{' '}
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
          <figure className='mt-2 mt-md-4 mb-4 mb-md-0'>
            <figcaption>
              <h5>Check Out My Code Wars Profile</h5>
            </figcaption>
            <a
              href='https://www.codewars.com/users/malinowskil123'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='https://www.codewars.com/users/malinowskil123/badges/large'
                alt='codewars badge'
                fluid
                className='mt-2'
              />
            </a>
          </figure>
        </Col>
      </Row>
    </div>
  )
}
