import React from 'react'
import Logo from '../../assets/logo192.png'

import './LoadingScreen.scss'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={Logo} alt="" width="100" />
      <div className="loading"></div>
    </div>
  )
}

export default LoadingScreen
