import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  navScrollAnimation,
  showHideMobileMenu,
} from '../../utils/navAnimations'
import { Image } from 'react-bootstrap'
import icon from '../../assets/icon.svg'
import './Nav.scss'

export default function Nav() {
  useEffect(() => navScrollAnimation('nav-bar'), [])
  return (
    <nav id='nav-bar' className='nav nav-static'>
      <h3 className='nav-text'>Luke Malinowski</h3>
      <Image
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
        <Link to='/'>
          <li>home</li>
        </Link>
        <Link to='/about'>
          <li>about</li>
        </Link>
        <Link to='/skills'>
          <li>skills</li>
        </Link>
        <Link to='/work'>
          <li>work</li>
        </Link>
        <a href='mailto:malinowski.luke123@gmail.com'>
          <li>contact</li>
        </a>
      </ul>
      <ul id='desktop-menu' className='desktop-menu'>
        <Link to='/'>
          <li>home</li>
        </Link>
        <Link to='/about'>
          <li>about</li>
        </Link>
        <Link to='/skills'>
          <li>skills</li>
        </Link>
        <Link to='/work'>
          <li>work</li>
        </Link>
        <a href='mailto:malinowski.luke123@gmail.com'>
          <li>contact</li>
        </a>
      </ul>
    </nav>
  )
}
