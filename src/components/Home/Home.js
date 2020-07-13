import React from 'react'
import Card from 'react-bootstrap/Card'
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
            <Card.Title className='dev-text' style={{ fontSize: '2rem' }}>
                Full-Stack Developer
            </Card.Title>
            <Card.Text>Thank you for checking out my portfolio.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
