import React from 'react'
import { Image, Card, Carousel } from 'react-bootstrap'
import githubLogo from '../../../assets/icons/github.png'
import www from '../../../assets/icons/www.png'
import './MobileCarousel.scss'

export default function MobileCarousel(props) {
  const { projectsArr } = props
  const carouselContent = projectsArr.map((elm, index) => {
    const { img, link, github, text } = elm
    return (
      <Carousel.Item key={index} style={{color:'#ffffff'}}>
        <Image src={img} className='carousel-img' />
        <p className='mt-2'>{text}</p>
        <div className='icon-container mt-2 mb-2'>
          {elm.link ? (
            <div>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <Image src={www} className='link-icons' />
              </a>
              <p>Web Link</p>
            </div>
          ) : null}
          <div>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <Image src={githubLogo} className='link-icons' />
            </a>
            <p>Github Repo</p>
          </div>
        </div>
      </Carousel.Item>
    )
  })
  return (
    <div className='container body-content'>
      <Card id='mobile-carousel' bg='dark' className='mt-2 mt-md-4'>
        <Carousel fade indicators={false}>
          {carouselContent}
        </Carousel>
      </Card>
    </div>
  )
}
