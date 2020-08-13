import React, { useEffect, useRef } from 'react'
import { typewriter } from '../../utils/typewriter'
import homeStrCode from '../../utils/homeStrCode'
import { slideIn } from '../../utils/slideIn'
import './CodeEditor.scss'

export default function CodeEditor() {
  const parent = useRef(),
    code = useRef()

  useEffect(() => {
    const parentCleanUp = { ...parent },
      codeCleanUp = { ...code }
    slideIn(parentCleanUp.current)
    typewriter(homeStrCode, codeCleanUp.current, 50)
    return () => {
      slideIn(parentCleanUp.current)
    }
  }, [])

  return (
    <div ref={parent} className='CodeEditor slide-in align-left'>
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
