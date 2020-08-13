import React, { useEffect } from 'react'
import { NavLink, Link as h1 } from 'react-router-dom'
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
      <h4 to='/home' className='nav-text'>
        Luke Malinowski
      </h4>
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
        <NavLink to='/home'>
          <li>home</li>
        </NavLink>
        <NavLink to='/about'>
          <li>about</li>
        </NavLink>
        <NavLink to='/skills'>
          <li>skills</li>
        </NavLink>
        <NavLink to='/work'>
          <li>work</li>
        </NavLink>
        <a href='mailto:malinowski.luke123@gmail.com'>
          <li>contact</li>
        </a>
      </ul>
      <ul id='desktop-menu' className='desktop-menu'>
        <NavLink to='/home'>
          <li>home</li>
        </NavLink>
        <NavLink to='/about'>
          <li>about</li>
        </NavLink>
        <NavLink to='/skills'>
          <li>skills</li>
        </NavLink>
        <NavLink to='/work'>
          <li>work</li>
        </NavLink>
        <a href='mailto:malinowski.luke123@gmail.com'>
          <li>contact</li>
        </a>
      </ul>
    </nav>
  )
}
