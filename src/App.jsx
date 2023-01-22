import React from 'react'
import BaseLayout from './components/BaseLayout/BaseLayout'
import CodeEditor from './components/CodeEditor/CodeEditor'
import Dock from './components/Dock/Dock'

const App = () => (
  <BaseLayout>
    <CodeEditor />
    <Dock />
  </BaseLayout>
)

export default App
