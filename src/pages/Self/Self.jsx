import React from 'react'

import { Row, Col, Image } from 'react-bootstrap'

import BaseLayout from '../../components/BaseLayout/BaseLayout'
import Contact from '../../components/Contact/Contact'
import Text from '../../components/Text/Text'
import Link from '../../components/Link/Link'
import Emoji from '../../components/Emoji/Emoji'

import headshotImg from '../../assets/images/headshot.jpg'

import './Self.scss'

export default function Self() {
  return (
    <BaseLayout className='mb-4' dataTestID='self'>
      <Row className='align-items-center'>
        <Col lg={5} className='mb-4 text-center'>
          <Image className='self-img' src={headshotImg} fluid />
        </Col>
        <Col lg={7}>
          <h1 className='text-center'>
            <Emoji code='&#128075;' /> Hi I'm Luke
          </h1>
          <Text>
            I am a full-stack software engineer based in{' '}
            <span className='big'>New York City</span>, currently working @
            <Link url='https://www.tropicapp.io/'>Tropic</Link>
            <Emoji code='&#127796;' />
            inovating <span className='big'>SaaS</span> procurment.
          </Text>
          <Text>
            Before that, I was working @{' '}
            <Link url='https://streamforge.com/'>Streamforge</Link> providing
            the gaming community with twitch analytics and marketing.
          </Text>
          <Text>
            Feel free to reach out and chat (or nerd out on JavaScript).
          </Text>
        </Col>
      </Row>
      <Contact />
    </BaseLayout>
  )
}
