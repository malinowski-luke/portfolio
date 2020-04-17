import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.scss'

function App() {
  return (
    <section className='text-center'>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  )
}

export default App
