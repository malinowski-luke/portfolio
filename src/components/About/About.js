import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import guitar from '../../assets/guitar.jpg'
import './About.scss'

export default function About() {
  return (
    <div className='About' id='about'>
      <Row
        style={{ color: 'white', paddingTop: '14vh' }}
        className='align-items-center container body-content'
      >
        <Col lg={6}>
          <h1>From music to code {'</>'}</h1>
          <p className='mb-3 mb-md-0'>
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
              className='link'
            >
              Jeep Things
            </a>{' '}
            - a culmination of my skills, JeepThings solved a problem that was
            close to home - a site for car lovers and rebuilders to trade, sell,
            and buy auto parts - something that my family often did. I am
            currently in New York seeking my next endeavor in web development.
          </p>
          <figure class='mt-2 mt-md-4 mb-4 mb-md-0'>
            <figcaption>
              <h4>Check Out My Code Wars Profile</h4>
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
                class='mt-2'
              />
            </a>
          </figure>
        </Col>
        <Col lg={6} style={{ padding: '0px' }}>
          <a
            href='https://www.youtube.com/watch?v=bYB1QKDv7HE'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={guitar} className='about-img' fluid />
          </a>
        </Col>
      </Row>
    </div>
  )
}
