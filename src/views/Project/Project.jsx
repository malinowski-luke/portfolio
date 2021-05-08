import React from 'react'

import { useHistory } from 'react-router-dom'

import { Row, Col, Image, Button } from 'react-bootstrap'
import Title from '../../components/Title/Title'
import Table from '../../components/Table/Table'
import Text from '../../components/Text/Text'

import './Project.scss'

export default function Project({ project }) {
  const history = useHistory()
  const { stack, image = '', github, link, title, text } = project

  const handleBack = () => {
    history.push('/work')
  }

  return (
    <div className='Project slide-fade' data-testid={title}>
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
            className='mt-4'
            onClick={handleBack}
          >
            Back
          </Button>
        </Col>
      </Row>
    </div>
  )
}
