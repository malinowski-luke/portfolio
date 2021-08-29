import React from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import './Home.scss'

export default function Home() {
  return (
    <div className='slide-fade Home' data-testid='home'>
      <CodeEditor />
    </div>
  )
}
