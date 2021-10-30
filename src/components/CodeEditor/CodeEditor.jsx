import React, { useEffect, useRef } from 'react'
import typewriter from '../../utils/typewriter'
import text from './text'
import './CodeEditor.scss'
import Emoji from '../Emoji/Emoji'

export default function CodeEditor() {
  const code = useRef()

  useEffect(() => {
    setTimeout(() => typewriter(text, code.current, 50), 500)
  }, [])

  return (
    <div className='CodeEditor'>
      <div className='window text-left'>
        <div className='nav-bar'>
          <div className='nav-bar-icons'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>index.js</p>
        </div>
        <div className='text-area'>
          <span className='comment'>
            {'//  '}repeat every 24 hours <Emoji code='&#128640;' />
          </span>
          <br />
          <span ref={code} className='code'></span>
          <span className='cursor'>_</span>
        </div>
      </div>
    </div>
  )
}
