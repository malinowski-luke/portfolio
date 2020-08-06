import React from 'react'
import Nav from './components/Nav/Nav'
import routes from './routes'
import './App.scss'

function App() {
  return (
    <div className='App text-center'>
      <Nav />
      <div className='container'>{routes}</div>
    </div>
  )
}

export default App
