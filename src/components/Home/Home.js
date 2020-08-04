import React, { useEffect } from 'react'
import { slideIn } from '../../utils/slideIn'
import { typewriter } from '../../utils/typewriter'
import homeStrCode from '../../utils/homeStrCode'
import CodeEditor from '../CodeEditor/CodeEditor'
import './Home.scss'

export default function Home() {
  useEffect(() => {
    typewriter(homeStrCode, 'code', 50)
    slideIn()
  }, [])
  return (
    <div id='home' className='Home'>
      <CodeEditor />
    </div>
  )
}
