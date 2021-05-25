import React from 'react'

import './OtherProjects.css'

export const OtherProjects = () => {
  return (
    <section className="other-projects-container" tabIndex="0">
      <h4 className="other-projects-heading">OTHER PROJECTS</h4>
      <article className="other-projects">
        <a href="https://github.com/idasylven/project-survey" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
          <h6 className="other-project-card-heading">SURVEY APP</h6>
          <p className="other-project-info">A responsive Stockholm live music <br />survey site using REACT and CSS <span className="forward-symbol">>></span></p>
        </a>
        <div className="tags-container">
          <p className="tag">REACT</p>
          <p className="tag">JSX</p>
          <p className="tag">CSS3</p>
        </div>
      </article>
      <article className="other-projects">
        <a href="https://github.com/idasylven/project-business-site" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
          <h6 className="other-project-card-heading">BUSINESS APP</h6>
          <p className="other-project-info">A northern lights adventure business <br />site using HTML and CSS <span className="forward-symbol">>></span></p>
        </a>
        <div className="tags-container">
          <p className="tag">HTML5</p>
          <p className="tag">CSS3</p>
        </div>
      </article>
      <article className="other-projects">
        <a href="https://github.com/idasylven/project-weather-app" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
          <h6 className="other-project-card-heading">WEATHER APP</h6>
          <p className="other-project-info">A pair-programmed Stockholm weather <br />app fetching data from an API <span className="forward-symbol">>></span></p>
        </a>
        <div className="tags-container">
          <p className="tag">HTML5</p>
          <p className="tag">CSS3</p>
          <p className="tag">JavaScript ES6</p>
          <p className="tag">API</p>
        </div>
      </article>
    </section>
  )
}
