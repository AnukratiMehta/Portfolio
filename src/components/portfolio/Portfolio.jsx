import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "X",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 2,
    image: IMG2,
    title: "X",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 3,
    image: IMG3,
    title: "X",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 4,
    image: IMG4,
    title: "X",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 5,
    image: IMG5,
    title: "X",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 6,
    image: IMG6,
    title: "X",
    github: "https://github.com",
    demo: "https://dribble.com/Alien_pixels"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="potfolio_image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="potfolio_cta">
                  <a href={github}>Github</a>
                  <a href={demo}>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio