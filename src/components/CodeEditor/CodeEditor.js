import React from 'react'
import './CodeEditor.scss'

export default function CodeEditor() {
  return (
    <div class='window text-left'>
      <div class='nav-bar'>
        <div class='nav-bar-icons'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>index.js</p>
      </div>
      <div class='code-editor'>
        <span id='code' class='code'></span>
        <span class='cursor'>_</span>
      </div>
    </div>
  )
}
