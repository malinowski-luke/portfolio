import React from 'react'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import github from '../../../assets/github.png'
import www from '../../../assets/www.png'
import './MobileCarousel.scss'

export default function MobileCarousel(props) {
  return (
    <div className='container body-content'>
      <Card
      id='mobile-carousel'
      bg='dark'
      border='light'
      className='mt-2 mt-md-4 card-padding'
      >
        <Carousel className='mobile-carousel-size'>
          <Carousel.Item>
            <Image src={props.jeepthings} className='carousel-img' />
            <div className='icon-container mt-4'>
              <a
                href='https://github.com/malinowskil123/jeepthings'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={github} className='link-icons' />
              </a>
              <a
                href='http://www.jeepthingsapp.com/#/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={www} className='link-icons' />
              </a>
            </div>
            <p className='mt-4 mb-5 mobile-carousel-text'>
              Jepthings is a simple mobile responsive marketplace app which allows
              users to create posts and contact other users to buy, trade and,
              sell jeep parts. Utilizes Amazon S3 for img uploads and Google Maps
              API.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={props.notepad} className='carousel-img' />
            <div className='icon-container mt-4'>
              <a
                href='https://github.com/malinowskil123/java-swing-notepad'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={github} className='link-icons' />
              </a>
            </div>
            <p className='mt-4 mb-5 mobile-carousel-text'>
              Notepad app written in java, allows users to create, save, and edit
              txt documents. Feautures a status bar for tracking word/sentance
              count and a fully working edit section with copy, paste, undo and
              redo functionality.
            </p>
          </Carousel.Item>
        </Carousel>
      </Card>
    </div>
  )
}
