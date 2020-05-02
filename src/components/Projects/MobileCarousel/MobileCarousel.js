import React from 'react'
import { Image, Card, Carousel } from 'react-bootstrap'
import github from '../../../assets/icons/github.png'
import www from '../../../assets/icons/www.png'
import './MobileCarousel.scss'

export default function MobileCarousel(props) {
  const { projectsArr } = props
  const carouselContent = projectsArr.map((elm, index) => {
    return (
      <Carousel.Item key={index}>
        <Image src={elm.img} className='carousel-img' />
        <div className='icon-container mt-4'>
          {elm.link ? (
            <a href={elm.link} target='_blank' rel='noopener noreferrer'>
              <Image src={www} className='link-icons' />
            </a>
          ) : null}
          <a href={elm.github} target='_blank' rel='noopener noreferrer'>
            <Image src={github} className='link-icons' />
          </a>
        </div>
        <p className='mt-4 mb-5 mobile-carousel-text'>{elm.text}</p>
      </Carousel.Item>
    )
  })
  return (
    <div className='container body-content'>
      <Card
        id='mobile-carousel'
        bg='dark'
        border='light'
        className='mt-2 mt-md-4 card-padding'
      >
        <Carousel className='mobile-carousel-size'>{carouselContent}</Carousel>
      </Card>
    </div>
  )
}
