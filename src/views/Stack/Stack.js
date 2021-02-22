import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../../components/Title/Title'
import Logo from '../../components/Logo/Logo'
import shuffle from '../../utils/shuffle'
import './Stack.scss'

export default function Stack() {
  const [stack, setStack] = useState([])

  const getStack = async () => {
    const myStorage = window.sessionStorage
    const cachedIcons = JSON.parse(myStorage.getItem('stack'))

    if (cachedIcons) {
      setStack(shuffle(cachedIcons))
    } else {
      try {
        const { data } = await axios.get('/stack')

        myStorage.setItem('stack', JSON.stringify(data))

        setStack(shuffle(data))
      } catch (error) {
        console.error('error fetching stack icons: ' + error)
      }
    }
  }

  const stackJSX = stack.map((elm, index) => {
    return <Logo key={index} img={elm.img} title={elm.title} />
  })

  useEffect(() => {
    getStack()
  }, [])

  return (
    <div className='Stack slide-fade'>
      <Title>Stack</Title>
      <div className='grid'>{stackJSX}</div>
    </div>
  )
}
