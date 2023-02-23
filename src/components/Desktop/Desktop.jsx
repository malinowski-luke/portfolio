import React from 'react'

import CodeEditor from '../CodeEditor/CodeEditor'
import Dock from '../Dock/Dock'

import text from '../../utils/text'

import './Desktop.scss'

const Desktop = ({ children }) => {
  // app teste
  return (
    <>
      <div className="desktop">
        <CodeEditor delayAnimation={2200} text={text} />
        <Dock />
      </div>
    </>
  )
}

export default Desktop
