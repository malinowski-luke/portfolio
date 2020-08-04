import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import './App.scss'

function App() {
  return (
    <section className='text-center'>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Work />
    </section>
  )
}

export default App
