import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Calculator.png'
import IMG2 from '../../assets/Tic-Tac-Toe.png'
import IMG3 from '../../assets/SQL-Tableau-Visualization.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Calculator",
    github: "https://github.com/AnukratiMehta/calculator.git",
    demo: "https://anukratimehta.github.io/calculator/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Tic-Tac-Toe",
    github: "https://github.com/AnukratiMehta/tic-tac-toe.git",
    demo: "https://anukratimehta.github.io/tic-tac-toe/"
  },
  {
    id: 3,
    image: IMG3,
    title: "SQL Visualization",
    github: "https://github.com/AnukratiMehta/Open-Defecation-Practices.git",
    demo: "https://public.tableau.com/shared/GTCN83BH2?:display_count=n&:origin=viz_share_link"
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
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="potfolio_image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_cta">
                  <a href={github} target="_blank">Github</a>
                  <a href={demo} target="_blank">Live Demo</a>
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