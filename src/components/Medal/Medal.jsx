import React from 'react'
import './Medal.scss'

export default function Medal({ frontImg, backImg }) {
  const thickness = () => {
    let emptyDivs = []
    for (let i = 0; i < 80; i++) {
      emptyDivs.push(
        <div key={i} className={i <= 5 ? 'medal-edge-image' : ''}></div>
      )
    }
    return emptyDivs
  }

  return (
    <div className='medal'>
      <div
        className='medal-back'
        style={{
          backgroundImage: `url(${backImg})`,
        }}
      ></div>
      <div className='medal-edge'>{thickness()}</div>
      <div
        className='medal-front'
        style={{
          backgroundImage: `url(${frontImg})`,
        }}
      ></div>
      <div className='medal-shadow'></div>
    </div>
  )
}
