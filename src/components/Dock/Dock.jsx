import React from 'react'

import GithubLogo from '../../assets/github.png'
import LinkedinLogo from '../../assets/linkedin.png'
import SoundcloudLogo from '../../assets/soundcloud.png'
import Trash from '../../assets/trash.png'

import './Dock.scss'
import links from './links'

const Dock = () => {
  return (
    <div data-testid="dock" className="dock">
      <a data-testid="github-link" href={links.github} target="_blank" rel="noopener noreferrer" className="dock-item">
        <img src={GithubLogo} alt="github link icon" />
      </a>
      <a
        data-testid="linkedin-link"
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
      >
        <img src={LinkedinLogo} alt="linkedin link icon" />
      </a>
      <div></div>
      <a
        data-testid="soundcloud-link"
        href={links.soundcloud}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item"
      >
        <img src={SoundcloudLogo} alt="soundcloud link icon" />
      </a>
      {/* vertical break */}
      <div></div>
      <a data-testid="trash-link" href={links.trash} target="_blank" rel="noopener noreferrer" className="dock-item">
        <img src={Trash} alt="trash link icon" />
      </a>
    </div>
  )
}

export default Dock
