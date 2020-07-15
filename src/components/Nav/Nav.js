import React, { useEffect } from 'react'
import {
  navScrollAnimation,
  showHideMobileMenu,
} from '../../utils/navAnimations'
import icon from '../../assets/icon.svg'
import './Nav.scss'

export default function Nav() {
  useEffect(() => navScrollAnimation('nav-bar'), [])
  return (
    <nav id='nav-bar' className='nav nav-static'>
      <h3 className='nav-text'>Luke Malinowski</h3>
      <img
        id='nav-icon'
        rel='img'
        src={icon}
        alt='icon'
        onClick={() => showHideMobileMenu('mobile-menu', 'nav-icon')}
        className='icon'
      />
      <ul
        id='mobile-menu'
        className='mobile-menu mobile-menu-hide hide-menu-collapse'
        onClick={() => showHideMobileMenu('mobile-menu', 'nav-icon')}
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
