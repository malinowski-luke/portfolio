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
          <h3>Github</h3>
        </a>
        <a
          href='https://www.linkedin.com/in/luke-malinowski-50328/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={linkedin} className='contact-logo' fluid />
          <h3>Linkedin</h3>
        </a>
        <a
          href='/assets/luke_malinowski_resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={pdf} className='contact-logo' fluid />
          <h3>Resume</h3>
        </a>
      </div>
      <div className='Contact-info'>
        <div className='container body-content'>
          <h1>You can reach me at...</h1>
          <h4 className='mt-3 mt-md-4'>
            I'd love to connect with fellow developers around the world.
          </h4>
          <div className='mt-4 info'>
            <Row>
              <Col md={6} className='mb-4 mb-md-0'>
                <a href='tel:631-741-7803'>
                  <Image src={phone} fluid className='contact-img' />
                  <br />
                  631-741-7803
                </a>
              </Col>
              <Col md={6}>
                <a href='mailto:malinowski.luke123@gmail.com'>
                  <Image
                    src={email}
                    fluid
                    className='contact-img offset-contact-img'
                  />
                  <br />
                  malinowski.luke123@gmail.com
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
