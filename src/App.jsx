import React from 'react'
import Nav from './components/Nav/Nav'
import router from './router'
import './App.scss'

function App() {
  return (
    <div id='app' className='App'>
      <Nav />
      <div className='container pb-4'>{router}</div>
    </div>
  )
}

export default App
