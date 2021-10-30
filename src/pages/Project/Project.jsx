import React from 'react'

import { useHistory } from 'react-router-dom'

import { Row, Col, Image } from 'react-bootstrap'

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
    <BaseLayout dataTestID={title}>
      <div className='d-flex justify-content-between'>
        <Title>{title}</Title>
        <Title className='close-icon' onClick={handleBack}>
          X
        </Title>
      </div>
      <Row className='align-items-center mt-2'>
        <Col lg={6} className='text-center'>
          <Image src={image} fluid />
        </Col>
        <Col lg={6} className='mt-4 mt-lg-0 px-lg-5'>
          <Table stack={stack} link={link} github={github} />
          <Text>{text}</Text>
        </Col>
      </Row>
    </BaseLayout>
  )
}
