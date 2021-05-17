import React from 'react'

import './MoreThoughts.css'

export const MoreThoughts = () => {
  return (
    <section className="more-thoughts-container" tabIndex="0">
      <h4 className="more-thoughts-heading">MORE THOUGHTS</h4>
      <article className="more-articles">
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
          <p className="more-thoughts-links">MAY 2021. <span className="link-texts">My Ambitions: Pinpoints for the future </span><span className="forward-symbol">>></span></p>
        </a>
      </article>
    </section>
  )
}

// TBC valid links to articles