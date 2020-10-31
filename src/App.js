import React, { useEffect } from 'react'
// import { useWindowHeight } from '@react-hook/window-size'
import Nav from './components/Nav/Nav'
import routes from './routes'
import './App.scss'

function App() {
  // const clientHeight = useWindowHeight()

  // useEffect(() => {
  //   // set app height dynamically to clients device
  //   document.getElementById('app').style.minHeight = `${clientHeight}px`
  // }, [clientHeight])

  return (
    <div id='app' className='App'>
      <Nav />
      <div className='container'>{routes}</div>
    </div>
  )
}

export default App
