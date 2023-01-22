import React from 'react'

import GithubLogo from '../../assets/github.png'
import LinkedinLogo from '../../assets/linkedin.png'
import Trash from '../../assets/trash.png'

import './Dock.scss'

const Dock = () => {
  return (
    <div data-testid="dock" className="dock">
      <a
        data-testid="github-link"
        href="https://github.com/malinowskil123"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
      >
        <img src={GithubLogo} alt="github link icon" />
      </a>
      <a
        data-testid="linkedin-link"
        href="https://www.linkedin.com/in/luke-malinowski-50328/"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
      >
        <img src={LinkedinLogo} alt="linkedin link icon" />
      </a>
      <a
        data-testid="trash-link"
        href="https://www.php.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
      >
        <img src={Trash} alt="trash link icon" />
      </a>
    </div>
  )
}

export default Dock
