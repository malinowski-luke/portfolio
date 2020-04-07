import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import guitar from '../../assets/guitar.JPG'
import './About.scss'

export default function About() {
  return (
    <div className='About' id='about'>
      <Row
        style={{ width: '80vw', color: 'white' }}
        className='align-items-center'
      >
        <Col lg={6}>
          <h1 className='about-header'>From music to code {'</>'}</h1>
          <p className='about-text mb-3 mb-md-0'>
            Audio Engineer turned Fullstack Web Developer, I found my passion
            for programming in an unconventional way. In college, I pursued the
            track of Audio Engineering - a musician at heart, I practiced
            producing and mixing audio for a variety of uses. Along the way, I
            found interest in personal projects that lead to the pivot of my
            career path. I started with Javascript, jQuery and
            Bootstrap. After the completion of personal apps and calculators, I
            moved onto a personal project called Jeep Things - a culmination of
            my skills, Jeep Things
            solved a problem that was close to home - a site for car lovers and
            rebuilders to trade, sell, and buy auto parts - something that my
            family often did.<br/>
            As my interest grew along with my ambition to further my career in web development, I applied to DevMountain a coding  boot camp in Lehi, Utah. There, I studied full stack development using the following technologies Postgres, Node, React, Express and Redux. After a fulfilling 3 months, I recently graduated with the honor of winning the best technology award for my personal project, ready to enter the field of web development with a new set of skills and knowledge I hadn't had before. I am currently in New York seeking my next endeavor in web programming. 
          </p>
        </Col>
        <Col lg={6}>
          <Image src={guitar} className='about-img' fluid />
        </Col>
      </Row>
    </div>
  )
}
