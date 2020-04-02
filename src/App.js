import React from 'react'
import Nav from './components/Nav/Nav'
import Sections from './components/Sections/Sections'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  return (
    <section className='App'>
      <Nav />
      <Sections />
    </section>
  )
}

export default App
