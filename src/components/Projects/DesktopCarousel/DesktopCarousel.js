import React from 'react'
import { Image, Card, Carousel } from 'react-bootstrap'
import './DesktopCarousel.scss'

export default function DesktopCarousel(props) {
  const { projectsArr } = props
  const carouselContent = projectsArr.map((elm, index) => {
    return (
      <Carousel.Item key={index}>
        <Image src={elm.img} className='portfolio-img' />
        <div className='overlay'>
          <>
            {elm.link ? (
              <a href={elm.link} target='_blank' rel='noopener noreferrer'>
                <h2>Vist Website</h2>
              </a>
            ) : null}
            <a href={elm.github} target='_blank' rel='noopener noreferrer'>
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
              <Card.Text className='card-text'>{elm.text}</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })
  return (
    <Carousel id='desktop-projects' className='mt-4 carousel' interval={7000}>
      {carouselContent}
    </Carousel>
  )
}
