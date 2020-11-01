import React from 'react'
import Title from '../../components/Title/Title'
import Link from '../../components/Link/Link'
import { Row, Col, Image } from 'react-bootstrap'
import headshot from '../../assets/headshot.jpg'
import Contact from '../../components/Contact/Contact'
import Text from '../../components/Text/Text'
import './Self.scss'

export default function About() {
  return (
    <div className='Self mb-4 slide-fade'>
      <Title>Self</Title>
      <Row className='align-items-center'>
        <Col md={4} className='mb-4 text-center'>
          <Image src={headshot} fluid className='self-img' />
        </Col>
        <Col md={8}>
          <Text>
            Audio Engineer turned Fullstack Web Developer, I found my passion
            for programming in an unconventional way. In college, I pursued the
            track of Audio Engineering - a musician at heart, I practiced
            producing and mixing audio for a variety of uses.
          </Text>
          <Text>
            Along the way, I found interest in web development that lead to the
            pivot of my career path. I started off Javascript, React, jQuery and
            Bootstrap.
          </Text>
          <Text>
            After the completion of personal apps and calculators, I moved onto
            a personal project called{' '}
            <Link url='http://www.jeepthingsapp.com/#/'>JeepThings</Link> - a
            culmination of my skills, JeepThings solved a problem that was close
            to home - a web app for car lovers and rebuilders to trade, sell,
            and buy auto parts - something that my family often did.
          </Text>
          <Text>
            I am currently in <span className='big font-italic'>New York</span>{' '}
            seeking my next endeavor in web development.
          </Text>
        </Col>
      </Row>
      <Contact />
    </div>
  )
}
