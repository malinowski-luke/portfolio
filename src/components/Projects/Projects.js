import React from 'react'
import DesktopCarousel from './DesktopCarousel/DesktopCarousel'
import MobileCarousel from './MobileCarousel/MobileCarousel'
import jeepthings from '../../assets/projects/jeepthings.jpg'
import calculator from '../../assets/projects/calculator.jpg'
import schoolapp from '../../assets/projects/schoolapp.jpg'
import notepad from '../../assets/projects/notepad.jpg'
import junkedup from '../../assets/projects/junkedup.jpg'
import quoteapp from '../../assets/projects/quoteapp.jpg'
import helo from '../../assets/projects/helo.jpg'
import './Projects.scss'

export default function Projects() {
  const projectsArr = [
    {
      img: jeepthings,
      // link: 'http://www.jeepthingsapp.com/#/',
      github: 'https://github.com/malinowskil123/jeepthings',
      text: `Jepthings is a simple mobile responsive marketplace app which
      allows users to create posts and contact other users to buy,
      trade and, sell jeep parts. Utilizes Amazon S3 for img uploads
      and Google Maps API.`,
    },
    {
      img: notepad,
      github: 'https://github.com/malinowskil123/java-swing-notepad',
      text: `Notepad app written in java, allows users to create, save, and
      edit txt documents. Feautures a status bar for tracking
      word/sentance count and a fully working edit functionality.`,
    },
    {
      img: calculator,
      // link: 'https://calculator-js-lm.herokuapp.com/',
      github: 'https://github.com/malinowskil123/calculator',
      text: ` Simple Javascript calculator application built using jQuery and HTML/CSS. Back-end
      was developed using node and express.`,
    },
    {
      img: schoolapp,
      github: 'https://github.com/malinowskil123/school-management-app',
      text: `College management application developed using Java and JavaFx
      GUI. Allows users to create records for keeping track of
      students, textbooks, courses and classrooms.`,
    },
    {
      img: junkedup,
      // link: 'http://www.junkedupstock.com/#/',
      github: 'https://github.com/malinowskil123/junked-up',
      text: `The basic idea of this app was to allow users to view stock information and current news related to the stock market.`,
    },
    {
      img: quoteapp,
      // link: 'https://quote-generator-sw.herokuapp.com/',
      github: 'https://github.com/malinowskil123/quote-generator',
      text: `This app generates radnom quotes from Star Wars. Built using react-typescript on the front-end and express and node on back-end`,
    },
    {
      img: helo,
      github: 'https://github.com/malinowskil123/helo',
      text: `Social media app allows users to create profiles, interact with other users, and create posts with images.`,
    },
  ]
  return (
    <div id='projects' className='Projects'>
      <h1 className='mt-5'>Projects</h1>
      <MobileCarousel projectsArr={projectsArr} />
      <DesktopCarousel projectsArr={projectsArr} />
    </div>
  )
}
