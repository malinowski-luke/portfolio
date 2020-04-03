import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import guitar from '../../assets/guitar.JPG'
import './About.scss'

export default function About() {
  return (
    <div className='About'>
      <Row
        style={{ width: '80vw', color: 'white' }}
        className='align-items-center'
      >
        <Col lg={6}>
          <h1>From music to code {'</>'}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            molestie, metus et commodo ullamcorper, tortor ex eleifend est, id
            tristique leo lectus in lacus. Sed sagittis justo eget leo
            efficitur, et pellentesque neque aliquet. Pellentesque et erat et
            velit tincidunt pulvinar. Fusce nec augue molestie, pharetra mi
            eget, ullamcorper dolor. Etiam et quam risus. Proin sed elit ut nisi
            fermentum bibendum. Ut id imperdiet erat, a fringilla nunc.
            Suspendisse tincidunt lobortis orci, accumsan convallis ex porttitor
            sollicitudin. Pellentesque congue mattis arcu a pellentesque. Aenean
            facilisis dui sit amet tellus lobortis auctor. Pellentesque
            dignissim nisi sed mi cursus dictum vel.
          </p>
        </Col>
        <Col lg={6}>
          <Image src={guitar} className='about-img' fluid />
        </Col>
      </Row>
    </div>
  )
}
