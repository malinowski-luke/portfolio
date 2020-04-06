import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Contact.scss'
import Image from 'react-bootstrap/Image'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import pdf from '../../assets/pdf.png'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import resume from '../../assets/luke_malinowski_resume.pdf'

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
        <a href={resume} target='_blank' rel='noopener noreferrer'>
          <Image src={pdf} className='contact-logo' fluid />
          <h3>Resume</h3>
        </a>
      </div>
      <div className='Contact-info'>
        <div className='contact-info-container'>
          <h1>You can reach me at...</h1>
          <h5 className='mt-3 mt-md-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            molestie, metus et commodo ullamcorper, tortor ex eleifend est, id
            tristique leo lectus in lacus.
          </h5>
          <div className='mt-4 info'>
            <Row>
              <Col md={6} className='mb-4 mb-md-0'>
                <Image src={phone} fluid className='contact-img' />
                <br />
                <a href='tel:631-741-7803'>631-741-7803</a>
              </Col>
              <Col md={6}>
                <Image src={email} fluid className='contact-img' />
                <br />
                <a href='mailto:malinowski.luke123@gmail.com'>
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
