import React from 'react'

import { Row, Col, Image } from 'react-bootstrap'

import BaseLayout from '../../components/BaseLayout/BaseLayout'
import Text from '../../components/Text/Text'
import Link from '../../components/Link/Link'
import Emoji from '../../components/Emoji/Emoji'

import headshotImg from '../../assets/images/headshot.jpg'

const Self = () => {
  return (
    <BaseLayout>
      <Row className='align-items-center'>
        <Col lg={5} className='mb-4 text-center'>
          <Image
            className='self-img'
            src={headshotImg}
            fluid
            style={{ width: '275px', borderRadius: '50%' }}
          />
        </Col>
        <Col lg={7}>
          <h1 className='mb-3'>
            <Emoji code='&#128075;' /> Hi I'm Luke
          </h1>
          <Text>
            I am a full-stack software engineer based in{' '}
            <span className='big'>New York City</span>, currently working @{' '}
            <Link url='https://www.tropicapp.io/'>Tropic</Link>
            <Emoji code='&#127796;' />
            inovating <span className='big'>SaaS</span> procurment. Before that,
            I was working @{' '}
            <Link url='https://streamforge.com/'>Streamforge</Link> providing
            the gaming community with twitch analytics {'&'} marketing.
          </Text>
          <Text>
            You can find me on{' '}
            <Link url='https://www.linkedin.com/in/luke-malinowski-50328/'>
              Linkedin
            </Link>
            {' & '}
            <Link url='https://github.com/malinowskil123'>Github</Link>.
          </Text>
          <Text>
            Feel free to reach out {'&'} chat (or nerd out on JavaScript){' '}
            <Link url='mailto:malinowski.luke123@gmail.com'>
              Get in touch...
            </Link>
          </Text>
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default Self
