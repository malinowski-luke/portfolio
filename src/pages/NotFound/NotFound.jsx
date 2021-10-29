import React from 'react'
import BaseLayout from '../../components/BaseLayout/BaseLayout'

export default function NotFound() {
  return (
    <BaseLayout className='text-center' dataTestID='notfound'>
      <h1>404 Not Found!</h1>
      <h4>Invalid Address</h4>
    </BaseLayout>
  )
}
