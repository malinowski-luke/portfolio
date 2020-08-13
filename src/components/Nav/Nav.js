import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {
  navScrollAnimation,
  showHideMobileMenu,
} from '../../utils/navAnimations'
import { Image } from 'react-bootstrap'
import icon from '../../assets/icon.svg'
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
      <Image
        ref={iconRef}
        src={icon}
        className='icon'
        onClick={() => {
          showHideMobileMenu(mobileMenuRef.current, iconRef.current)
        }}
      />
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
