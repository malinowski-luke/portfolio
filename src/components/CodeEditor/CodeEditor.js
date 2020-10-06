import React, { useEffect, useRef } from 'react'
import typewriter from '../../utils/typewriter'
import homeStrCode from '../../utils/homeStrCode'
import animationCallback, { style } from '../../utils/animationCallback'
import './CodeEditor.scss'

export default function CodeEditor() {
  const domElm = useRef()
  const code = useRef()

  useEffect(() => {
    const codeCleanUp = { ...code }
    animationCallback(domElm)
    typewriter(homeStrCode, codeCleanUp.current, 50)
    // return () => {
    //   typewriter('', codeCleanUp.current, 1)
    // }
  }, [])

  return (
    <div ref={domElm} className={`CodeEditor ${style}`}>
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
