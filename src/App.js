import React from 'react'
import Nav from './components/Nav/Nav'
import routes from './routes'
import './App.scss'

function App() {
  return (
    <div id='app' className='App'>
      <Nav />
      <div className='container pb-4'>{routes}</div>
    </div>
  )
}

export default App
