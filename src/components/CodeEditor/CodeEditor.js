import React, { useEffect, useRef } from 'react'
import typewriter from '../../utils/typewriter'
import homeStrCode from '../../utils/homeStrCode'
import './CodeEditor.scss'

export default function CodeEditor() {
  const code = useRef()

  useEffect(() => {
    typewriter(homeStrCode, code.current, 50)
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
        <div className='code-editor'>
          <span ref={code} className='code'></span>
          <span className='cursor'>_</span>
        </div>
      </div>
    </div>
  )
}
