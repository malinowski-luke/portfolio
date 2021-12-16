import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Self from './pages/Self/Self'

import './App.scss'

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    setTimeout(() => {
      if (window.scrollY === 0) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }
    }, 9000)
  }, [])

  return (
    <div id='app' className='App container'>
      <Home />
      <Self />
    </div>
  )
}

export default App
