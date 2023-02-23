import React from 'react'

import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Desktop from './components/Desktop/Desktop'

import vhCheck from 'vh-check'

import './App.scss'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const checkVh = vhCheck()
  return (
    <>
      <LoadingScreen />
      <Desktop />
    </>
  )
}

export default App
