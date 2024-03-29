import React, { useEffect, useRef } from 'react'
import typewriter from '../../utils/typewriter'

import './CodeEditor.scss'

const CodeEditor = ({ delayAnimation = 500, text = '' }) => {
  const code = useRef()

  useEffect(() => {
    setTimeout(() => typewriter(text, code.current, 50), delayAnimation)
  }, [text, delayAnimation])

  const codeLineNumbers = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div data-testid="code-editor" className="CodeEditor">
      <div className="window">
        <div className="nav-bar">
          <div className="nav-bar-icons">
            <div>x</div>
            <div>-</div>
            <div>+</div>
          </div>
          <p>index.js</p>
        </div>
        <div className="text-area">
          <div>
            {codeLineNumbers.map((num) => (
              <p key={`line-num-${num}`} className="line-number">
                {num}
              </p>
            ))}
          </div>
          <div>
            <span ref={code} className="code"></span>
            <div className="cursor"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor
