import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { showHideMobileMenu } from '../../utils/navAnimations'
import './Nav.scss'

export default function Nav() {
  const mobileMenuRef = useRef(),
    iconRef = useRef()

  return (
    <nav className='nav px-2  px-lg-0'>
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
        id='mobile-menu'
        className='mobile-menu-hide text-center'
        onClick={() => {
          showHideMobileMenu(mobileMenuRef.current, iconRef.current)
        }}
      >
        <li>
          <NavLink to='/home'>home</NavLink>
        </li>
        <li>
          <NavLink to='/self'>self</NavLink>
        </li>
        <li>
          <NavLink to='/skills'>skills</NavLink>
        </li>
        <li>
          <NavLink to='/work'>work</NavLink>
        </li>
        <li>
          <a href='mailto:malinowski.luke123@gmail.com'>contact</a>
        </li>
      </ul>
      <ul id='desktop-menu'>
        <li>
          <NavLink to='/home'>
            home
            <hr />
          </NavLink>
        </li>
        <li>
          <NavLink to='/self'>
            self
            <hr />
          </NavLink>
        </li>
        <li>
          <NavLink to='/skills'>
            skills
            <hr />
          </NavLink>
        </li>
        <li>
          <NavLink to='/work'>
            work
            <hr />
          </NavLink>
        </li>
        <li>
          <a href='mailto:malinowski.luke123@gmail.com'>
            contact
            <hr />
          </a>
        </li>
      </ul>
    </nav>
  )
}
