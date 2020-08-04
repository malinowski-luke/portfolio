import React from 'react'
import { Card, Image } from 'react-bootstrap'
import logo from '../../assets/logo192.png'

import './Home.scss'

export default function Home() {
  return (
    <div id='home' className='Home'>
      <div className='gray-overlay'>
        <Card
          border='white'
          body
          bg='dark'
          text='white'
          style={{ fontSize: '1.5rem' }}
        >
          <Card.Body style={{ maxWidth: '80vw' }}>
            <Card.Title style={{ fontSize: '2rem' }}>
              <strong>
                Łukasz <i>"Luke"</i> Malinowski
              </strong>
            </Card.Title>
            <div className='dev-text' style={{ fontSize: '2rem' }}>
              Full-Stack Developer
              <Image src={logo} className='logo-img ml-2' fluid />
            </div>
            <Card.Text className='mt-2'>
              Thank you for checking out my portfolio.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
