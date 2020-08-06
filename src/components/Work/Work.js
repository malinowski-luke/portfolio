import React, { useEffect } from 'react'
import DesktopCarousel from './DesktopCarousel/DesktopCarousel'
import MobileCarousel from './MobileCarousel/MobileCarousel'
import projectsArr from './projectsArr'
import { slideIn } from '../../utils/slideIn'

export default function Projects() {
  useEffect(() => slideIn('work'))
  return (
    <div id='work' className='slide-in align-left'>
      <MobileCarousel projectsArr={projectsArr} />
      <DesktopCarousel projectsArr={projectsArr} />
    </div>
  )
}
