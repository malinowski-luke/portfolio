import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {
  navScrollAnimation,
  showHideMobileMenu,
} from '../../utils/navAnimations'
import './Nav.scss'

export default function Nav() {
  const navRef = useRef(),
    mobileMenuRef = useRef(),
    iconRef = useRef()

  useEffect(() => {
    const navRefCleanUp = { ...navRef }
    navScrollAnimation(navRefCleanUp.current)
    return () => {
      navScrollAnimation(navRefCleanUp.current)
    }
  }, [])

  return (
    <nav ref={navRef} className='nav nav-static'>
      <h4 className='nav-text'>Luke Malinowski</h4>
      <svg
        viewBox='0 0 100 80'
        width='30'
        height='30'
        ref={iconRef}
        className='icon'
        onClick={() => {
          showHideMobileMenu(mobileMenuRef.current, iconRef.current)
        }}
      >
        <rect width='100' height='20' rx='8'></rect>
        <rect y='30' width='100' height='20' rx='8'></rect>
        <rect y='60' width='100' height='20' rx='8'></rect>
      </svg>
      <ul
        ref={mobileMenuRef}
        className='mobile-menu mobile-menu-hide'
        onClick={() => {
          showHideMobileMenu(mobileMenuRef.current, iconRef.current)
        }}
      >
        <NavLink to='/home'>
          <li>home</li>
        </NavLink>
        <NavLink to='/self'>
          <li>self</li>
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
        <NavLink to='/self'>
          <li>self</li>
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
