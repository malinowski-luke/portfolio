import React, { useEffect, useRef } from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import animationCallback, { style } from '../../utils/animationCallback'
import './Home.scss'

export default function Home() {
  const home = useRef()

  useEffect(() => animationCallback(home), [])
  return (
    <div ref={home} className={`${style} Home`}>
      <CodeEditor />
    </div>
  )
}
