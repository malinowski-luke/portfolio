import React from 'react'
import { Image } from 'react-bootstrap'
export default function Codewars() {
  return (
    <figure className='mt-2 mt-md-4 mb-4 mb-md-0'>
      <figcaption>
        <h5>Check Out My Code Wars Profile</h5>
      </figcaption>
      <a
        href='https://www.codewars.com/users/malinowskil123'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='https://www.codewars.com/users/malinowskil123/badges/large'
          alt='codewars badge'
          fluid
          className='mt-2'
        />
      </a>
    </figure>
  )
}
