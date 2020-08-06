import React, { useEffect } from 'react'
import { typewriter } from '../../utils/typewriter'
import homeStrCode from '../../utils/homeStrCode'
import { slideIn } from '../../utils/slideIn'
import './CodeEditor.scss'

export default function CodeEditor() {
  useEffect(() => {
    slideIn('code-editor')
    typewriter(homeStrCode, 'code', 50)
  },[])
  return (
    <div id='code-editor' className='CodeEditor slide-in align-left'>
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
          <span id='code' className='code'></span>
          <span className='cursor'>_</span>
        </div>
      </div>
    </div>
  )
}
