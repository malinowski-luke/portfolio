import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  console.log('Shoutout to Gina Hock For Being an Awesome Friend!')
  return (
    <section className='App'>
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
