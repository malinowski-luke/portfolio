import React from 'react'
import DesktopCarousel from './DesktopCarousel/DesktopCarousel'
import jeepthings from '../../assets/jeepthings.jpg'
import notepad from '../../assets/notepad.jpg'
import './Projects.scss'

export default function Projects() {
  return (
    <div id='projects' className='Projects'>
      <h1>Examples of My Work</h1>
      <DesktopCarousel jeepthings={jeepthings} notepad={notepad} />
    </div>
  )
}
