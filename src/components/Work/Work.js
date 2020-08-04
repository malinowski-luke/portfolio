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
import blog from '../../assets/projects/blog.jpg'
import './Projects.scss'

export default function Projects() {
  const projectsArr = [
    {
      img: jeepthings,
      link: 'http://www.jeepthingsapp.com/#/',
      github: 'https://github.com/malinowskil123/jeepthings',
      text: `A web app for jeep lovers and rebuilders to trade, sell, and buy auto parts.`,
    },
    {
      img: notepad,
      github: 'https://github.com/malinowskil123/java-swing-notepad',
      text: `Notepad desktop app developed using in Java.`,
    },
    {
      img: calculator,
      // link: 'https://calculator-js-lm.herokuapp.com/',
      github: 'https://github.com/malinowskil123/calculator',
      text: `Javascript calculator built using jQuery and HTML/CSS.`,
    },
    {
      img: schoolapp,
      github: 'https://github.com/malinowskil123/school-management-app',
      text: `College management app developed using Java. Users can create data records for students, textbooks, courses and classrooms.`,
    },
    {
      img: junkedup,
      // link: 'http://www.junkedupstock.com/#/',
      github: 'https://github.com/malinowskil123/junked-up',
      text: `Junked Up provides users with stock info and market related news.`,
    },
    {
      img: quoteapp,
      // link: 'https://quote-generator-sw.herokuapp.com/',
      github: 'https://github.com/malinowskil123/quote-generator',
      text: `Random Star Wars quote generator. Connects to twitter's API to allow users to tweet quotes.`,
    },
    {
      img: helo,
      github: 'https://github.com/malinowskil123/helo',
      text: `Social media app, users can create profiles, post blogs, and interact with other users.`,
    },
    {
      img: blog,
      github: 'https://github.com/malinowskil123/blog-layout',
      text: `Blog page with an animated progress bar.`,
    },
  ]
  return (
    <div id='work' className='Projects'>
      <div className='slide-in align-left'>
        <MobileCarousel projectsArr={projectsArr} />
        <DesktopCarousel projectsArr={projectsArr} />
      </div>
    </div>
  )
}
