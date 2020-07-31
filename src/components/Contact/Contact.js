import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import './Contact.scss'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import pdf from '../../assets/icons/pdf.png'
import phone from '../../assets/icons/phone.png'
import email from '../../assets/icons/email.png'

export default function Contact() {
  return (
    <>
      <div id='contact' className='Contact-bar'>
        <a
          href='https://github.com/malinowskil123'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={github} className='contact-logo' fluid />
          <h4>Github</h4>
        </a>
        <a
          href='https://www.linkedin.com/in/luke-malinowski-50328/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={linkedin} className='contact-logo' fluid />
          <h4>Linkedin</h4>
        </a>
        <a
          href='https://docs.google.com/document/d/e/2PACX-1vRZsT9_8BUT_2ENiwVJ-FEfJlEo7b_G5U_ejDQMt6AKwJlnutHpVmlsImdyCtLKjAy9E61YpadcpDuB/pub'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={pdf} className='contact-logo' fluid />
          <h4>Resume</h4>
        </a>
      </div>
      <div className='Contact-info'>
        {/* slide in css in utils */}
        <div className='slide-in align-right container body-content'>
          <h3>You can reach me at...</h3>
          <h5 className='mt-3 mt-md-4'>
            I'd love to connect with fellow developers around the world.
          </h5>
          <div className='mt-4 info'>
            <Row>
              <Col sm={{ span: 5, offset: 1 }} md={{ span: 4, offset: 2 }} className='mb-4 mb-md-0'>
                <a
                  href='mailto:malinowski.luke123@gmail.com'
                  className='contact-link'
                >
                  <Image src={email} fluid className='contact-img' />
                  <p>malinowski.luke123@gmail.com</p>
                </a>
              </Col>
              <Col sm={5} md={4}>
                <a href='tel:631-741-7803' className='contact-link'>
                  <Image src={phone} fluid className='contact-img' />
                  <p>631-741-7803</p>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
