import React from 'react'
import { Image } from 'react-bootstrap'
import linkedin from '../../../assets/icons/linkedin.png'
import github from '../../../assets/icons/github.png'
import pdf from '../../../assets/icons/pdf.png'
import './Contact.scss'

export default function Contact() {
  return (
    <div className='contact-bar mt-4 mb-4'>
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
        href='https://drive.google.com/file/d/1dZujMhUkbDsQF4XOw--2oR2RVLZndDNI/view?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src={pdf} className='contact-logo' fluid />
        <h4>Resume</h4>
      </a>
    </div>
  )
}
