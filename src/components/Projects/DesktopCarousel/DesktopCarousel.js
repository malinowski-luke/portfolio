import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import './DesktopCarousel.scss'

export default function DesktopCarousel(props) {
  return (
    <div>
      <Row id='desktop-projects' className='mt-4'>
        <Col md={12}>
          <Carousel interval={7000} className='carousel'>
            <Carousel.Item>
              <Image src={props.jeepthings} className='portfolio-img' />
              <div className='overlay'>
                <>
                  <a href='http://www.jeepthingsapp.com/#/' target='_blank'>
                    <h2>Vist Website</h2>
                  </a>
                  <a
                    href='https://github.com/malinowskil123/jeepthings'
                    target='_blank'
                  >
                    <h2>
                      View <strong>Code</strong> on Github
                    </h2>
                  </a>
                </>
              </div>
              <Carousel.Caption>
                <Card
                  border='white'
                  body
                  bg='dark'
                  text='white'
                  className='project-card'
                >
                  <Card.Body style={{ padding: '0', margin: '0' }}>
                    <Card.Text>
                      <p className='card-text'>
                        Jepthings is a simple mobile responsive marketplace app
                        which allows users to create posts and contact other
                        users to buy, trade and, sell jeep parts. Utilizes
                        Amazon S3 for img uploads and Google Maps API.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={props.notepad} className='portfolio-img' />
              <div className='overlay'>
                <>
                  <a
                    href='https://github.com/malinowskil123/java-swing-notepad'
                    target='_blank'
                  >
                    <h2>
                      View <strong>Code</strong> on Github
                    </h2>
                  </a>
                </>
              </div>
              <Carousel.Caption>
                <Card
                  border='white'
                  body
                  bg='dark'
                  text='white'
                  className='project-card'
                >
                  <Card.Body style={{ padding: '0', margin: '0' }}>
                    <Card.Text>
                      <p className='card-text'>
                        Notepad app written in java, allows users to create,
                        save, and edit txt documents. Feautures a status bar for
                        tracking word/sentance count and a fully working edit
                        section with copy, paste, undo and redo functionality.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}
