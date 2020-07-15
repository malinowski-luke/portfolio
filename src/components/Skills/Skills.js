import React from 'react'
import Logo from '../Logo/Logo'
import node from '../../assets/icons/node.png'
import postgres from '../../assets/icons/postgres.png'
import msSql from '../../assets/icons/mssql.png'
import js from '../../assets/icons/js.png'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import scss from '../../assets/icons/scss.png'
import express from '../../assets/icons/express.png'
import bootstrap from '../../assets/icons/bootstrap.png'
import react from '../../assets/icons/react.png'
import jquery from '../../assets/icons/jquery.gif'
import typescript from '../../assets/icons/typescript.png'
import './Skills.scss'

export default function Skills() {
  return (
    <div id='skills' className='Skills'>
      <h3 className='text-center mt-4'>Skills</h3>
      <div className='grid mt-3'>
        <Logo img={js} title='JavaScript' />
        <Logo img={typescript} title='TypeScript' />
        <Logo img={html} title='Html' />
        <Logo img={css} title='Css' />
        <Logo img={scss} title='Sass' />
        <Logo img={react} title='React' />
        <Logo img={bootstrap} title='BootStrap' />
        <Logo img={jquery} title='jQuery' />
        <Logo img={node} title='Node' />
        <Logo img={express} title='Express' />
        <Logo img={postgres} title='PostgresSql' />
        <Logo img={msSql} title='SQL Server' />
      </div>
    </div>
  )
}
