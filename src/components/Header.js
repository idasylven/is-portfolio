import React from 'react'

export const Header = () => {
  return (
    <header className="header">
      <section className="hero-container">
      
        <ul className="media-icons">
          <li>
            <a className="media-icon" href="https://www.linkedin.com/in/ida-sylv%C3%A9n-aa8198203/" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
              <img className="linkedin-icon" src="./assets/icons/linkedin-round (2).svg" alt="Link to Ida Sylvéns LinkedIn" />
            </a>
          </li>
          <li>
            <a className="media-icon" href="https://github.com/idasylven" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
              <img className="github-icon" src="./assets/icons/github-icon-white.svg" alt="Link to Ida Sylvéns GitHub" />
            </a>
          </li>
        </ul>
 
        <h3>PORTFOLIO: IDA SYLVÉN</h3>
        <h1>frontend developer</h1>
        <h2>& designer</h2>
        <picture>
          <img className="profile-pic" src="./assets/images/profile-pic-1-mirrored.jpg" alt="Ida Sylvén headshot" />
        </picture>
      </section>
    </header>
  )
}