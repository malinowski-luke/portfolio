import React from 'react'

import { Row, Col } from 'react-bootstrap'

import Title from '../../components/Title/Title'
import Contact from '../../components/Contact/Contact'
import Text from '../../components/Text/Text'
import Medal from '../../components/Medal/Medal'
import Link from '../../components/Link/Link'
import Emoji from '../../components/Emoji/Emoji'

import headshotImg from '../../assets/images/headshot.jpg'
import icelandImg from '../../assets/images/iceland.jpg'

import './Self.scss'

export default function Self() {
  return (
    <div className='Self mb-4 slide-fade' data-testid='self'>
      <Title>Self</Title>
      <Row className='align-items-center'>
        <Col lg={5} className='mb-4 text-center'>
          <Medal frontImg={headshotImg} backImg={icelandImg} />
        </Col>
        <Col lg={7}>
          <Text>
            Audio Engineer turned Software Engineer, I found my passion for
            coding in an unconventional way. In college, I pursued the track of
            Audio Engineering - a musician at heart, I practiced producing and
            mixing audio for a variety of uses.
          </Text>
          <Text>
            Along the way, I found interest in software engineering that lead to
            the pivot of my career path. I started off building small Java
            desktop apps and then made a jump into the JavaScript ecosystem
            (TypeScript, Node, React, Vue) and I haven't looked back since
            <Emoji code='&#128640;' />.
          </Text>
          <Text>
            I am currently in <span className='big'>New York</span> working @{' '}
            <Link url='https://www.tropicapp.io/'>Tropic</Link>{' '}
            <Emoji code='&#127796;' /> as a software engineer.
          </Text>
        </Col>
      </Row>
      <Contact />
    </div>
  )
}
