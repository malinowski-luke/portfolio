import React from 'react'
import DesktopCarousel from './DesktopCarousel/DesktopCarousel'
import MobileCarousel from './MobileCarousel/MobileCarousel'
import jeepthings from '../../assets/jeepthings.jpg'
import notepad from '../../assets/notepad.jpg'
import './Projects.scss'

export default function Projects() {
  return (
    <div id='projects' className='Projects'>
      <h1 className='mt-5'>Projects</h1>
      <MobileCarousel jeepthings={jeepthings} notepad={notepad} />
      <DesktopCarousel jeepthings={jeepthings} notepad={notepad} />
    </div>
  )
}
