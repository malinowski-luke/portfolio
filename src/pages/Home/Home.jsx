import React from 'react'

import BaseLayout from '../../components/BaseLayout/BaseLayout'
import CodeEditor from '../../components/CodeEditor/CodeEditor'

import './Home.scss'

export default function Home() {
  return (
    <BaseLayout className='Home' dataTestID='home'>
      <CodeEditor />
    </BaseLayout>
  )
}
