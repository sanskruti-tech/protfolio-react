import React from 'react'
import './about.css'
import Me from '../../assets/girl.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small></small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <p>
          A successful website does three things: It attracts the right kinds of visitors.
          Guides them to the main services or products you offer. 
          Collect Contact details for future ongoing relation.There are three responses to a piece of design - yes, no, and WOW! Wow is the one to aim for
          </p>
        </div>
      </div>
    </section>
  )
}

export default About