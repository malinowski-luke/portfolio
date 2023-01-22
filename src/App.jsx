import React from 'react'

import BaseLayout from './components/BaseLayout/BaseLayout'
import CodeEditor from './components/CodeEditor/CodeEditor'
import Footer from './components/Footer/Footer'

const App = () => (
  <BaseLayout>
    <CodeEditor />
    <Footer />
  </BaseLayout>
)

export default App
