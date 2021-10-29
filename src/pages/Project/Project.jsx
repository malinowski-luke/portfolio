import React from 'react'

import { useHistory } from 'react-router-dom'

import { Row, Col, Image, Button } from 'react-bootstrap'

import BaseLayout from '../../components/BaseLayout/BaseLayout'
import Title from '../../components/Title/Title'
import Table from '../../components/Table/Table'
import Text from '../../components/Text/Text'

import './Project.scss'

export default function Project({ project = null }) {
  const history = useHistory()
  const { stack, image = '', github, link, title, text } = project

  const handleBack = () => {
    history.push('/work')
  }

  return (
    <BaseLayout className='Project' dataTestID={title}>
      <Title>{title}</Title>
      <Table stack={stack} link={link} github={github} />
      <Row className='align-items-center mt-2'>
        <Col lg={6} className='text-center'>
          <Image src={image} fluid />
        </Col>
        <Col lg={6} className='mt-4 mt-lg-0 px-lg-5'>
          <Text>{text}</Text>
          <Button
            variant='outline-secondary'
            style={{ width: '100%' }}
            className='mt-4'
            onClick={handleBack}
          >
            Back
          </Button>
        </Col>
      </Row>
    </BaseLayout>
  )
}
