import React, { useEffect } from 'react'
import icon from '../../assets/icon.svg'
import { Row, Col } from 'react-bootstrap'
import './Nav.scss'

export default function Nav() {
  const showHideMobileMenu = () => {
    const dropdown = document.getElementById('mobile-menu')
    dropdown.classList.toggle('moblie-menu-show')
    dropdown.classList.toggle('moblie-menu-hide')
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('nav-bar')
      if (window.pageYOffset > 60 && window.innerWidth > 1000) {
        navbar.classList.add('nav-scroll')
        navbar.classList.remove('nav-static')
      } else if (window.pageYOffset < 60 && window.innerWidth > 1000) {
        navbar.classList.remove('nav-scroll')
        navbar.classList.add('nav-static')
      }
    })
  }, [])
  return (
    <nav id='nav-bar' className='nav-static'>
      <Row className='align-items-center' style={{ height: '10vh' }}>
        <Col xs={8} md={6} className='mt-2 mt-md-0'>
          <h1 className='nav-text'>Luke Malinowski</h1>
        </Col>
        <Col xs={2} md={6}>
          <button className='nav-button' onClick={showHideMobileMenu}>
            menu
            <img rel='img' src={icon} alt='icon' className='icon' />
          </button>
          <ul
            id='mobile-menu'
            className='mobile-menu mobile-menu-hide'
            onClick={showHideMobileMenu}
          >
            <li>home</li>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
          <ul id='desktop-menu' className='desktop-menu'>
            <li>home</li>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </Col>
      </Row>
    </nav>
  )
}
