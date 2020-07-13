import React, { useEffect } from 'react'
import icon from '../../assets/icon.svg'
import './Nav.scss'

export default function Nav() {
  const showHideMobileMenu = () => {
    const dropdown = document.getElementById('mobile-menu')
    dropdown.classList.toggle('hide-menu-collapse')
    dropdown.classList.toggle('moblie-menu-show')
    dropdown.classList.toggle('moblie-menu-hide')
    flipNavIcon()
  }
  const flipNavIcon = () => {
    const navIcon = document.getElementById('nav-icon')
    navIcon.classList.toggle('icon-rotate')
  }
  const navScrollAnimation = () => {
    console.log('hit')
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('nav-bar')
      if (window.pageYOffset > 60 ) {
        navbar.classList.add('nav-scroll')
        navbar.classList.remove('nav-static')
      } else if (window.pageYOffset < 60) {
        navbar.classList.remove('nav-scroll')
        navbar.classList.add('nav-static')
      }
    })
  }
  useEffect(() => {
    navScrollAnimation()
  }, [])
  return (
    <nav id='nav-bar' className='nav nav-static'>
        <h3 className='nav-text'>Luke Malinowski</h3>
      <img
        id='nav-icon'
        rel='img'
        src={icon}
        alt='icon'
        onClick={showHideMobileMenu}
        className='icon'
      />
      <ul
        id='mobile-menu'
        className='mobile-menu mobile-menu-hide hide-menu-collapse'
        onClick={showHideMobileMenu}
      >
        <a href='#home'>
          <li>home</li>
        </a>
        <a href='#about'>
          <li>about</li>
        </a>
        <a href='#skills'>
          <li>skills</li>
        </a>
        <a href='#projects'>
          <li>projects</li>
        </a>
        <a href='#contact'>
          <li>contact</li>
        </a>
      </ul>
      <ul id='desktop-menu' className='desktop-menu'>
        <li>
          <a href='#home'>home</a>
        </li>
        <li>
          <a href='#about'>about</a>
        </li>
        <li>
          <a href='#skills'>skills</a>
        </li>
        <li>
          <a href='#projects'>projects</a>
        </li>
        <li>
          <a href='#contact'>contact</a>
        </li>
      </ul>
    </nav>
  )
}
