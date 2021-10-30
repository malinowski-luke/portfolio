import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { Image } from 'react-bootstrap'
import { showHideMobileMenu } from '../../utils/navAnimations'

import codeLogo from '../../assets/logo192.png'

import './Nav.scss'

export default function Nav() {
  const mobileMenuRef = useRef()
  const iconRef = useRef()

  return (
    <nav className='nav px-2  px-lg-0'>
      <Link to='/home'>
        <Image src={codeLogo} fluid width={'50px'} />
      </Link>
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
      <div
        ref={mobileMenuRef}
        id='mobile-menu'
        className='mobile-menu-hide text-center'
        onClick={() => {
          showHideMobileMenu(mobileMenuRef.current, iconRef.current)
        }}
      >
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/self'>self</NavLink>
        <NavLink to='/stack'>stack</NavLink>
        <NavLink to='/work'>work</NavLink>
        <a
          href='https://malinowski-luke123.medium.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          blog
        </a>
      </div>
      <div id='desktop-menu'>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/self'>self</NavLink>
        <NavLink to='/stack'>stack</NavLink>
        <NavLink to='/work'>work</NavLink>
        <a
          href='https://malinowski-luke123.medium.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          blog
        </a>
      </div>
    </nav>
  )
}
