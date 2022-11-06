import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {BiLibrary} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <BsFillAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>100+ worldwide</small>
            </article>

            <article className='about_card'>
              <BiLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis adipisci minima iste sequi voluptates accusamus voluptate at autem, maxime sint, similique nostrum obcaecati excepturi? Mollitia iste sed optio excepturi quis.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About