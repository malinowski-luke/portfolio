import React from 'react'
import { Image } from 'react-bootstrap'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import pdf from '../../assets/icons/pdf.png'
import './Contact.scss'

export default function Contact() {
  return (
    <>
      <div className='contact-bar mt-4'>
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
      <a
        href='https://www.codewars.com/users/malinowskil123'
        target='_blank'
        rel='noopener noreferrer'
        className='mt-4'
      >
        <Image
          src='https://www.codewars.com/users/malinowskil123/badges/large'
          alt='codewars badge'
          fluid
        />
      </a>
    </>
  )
}
