import React from 'react'
import Home from './pages/Home/Home'
import Self from './pages/Self/Self'

import './App.scss'

const App = () => {
  return (
    <div id='app' className='App container'>
      <Home />
      <Self />
    </div>
  )
}

export default App
