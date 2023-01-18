import React from 'react'
import BaseLayout from './components/BaseLayout/BaseLayout'
import CodeEditor from './components/CodeEditor/CodeEditor'
import Footer from './components/Footer/Footer'

import './App.scss'

const App = () => (
  <div id="app" className="App">
    <BaseLayout>
      <CodeEditor />
    </BaseLayout>
    <Footer />
  </div>
)

export default App
