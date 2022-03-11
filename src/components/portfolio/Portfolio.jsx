import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/web_project.jpg'
import IMG2 from '../../assets/web_project_2.jpg'
import IMG3 from '../../assets/web_project_3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is Clothing Store</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/sanskruti-tech' className='btn btn-primary' rel="noreferrer noopener" target='_blank' >Github</a>
            <a href='https://websiteforclothingstore.websiteinacase.com' className='btn btn-primary' rel="noreferrer noopener" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>This is Furniture Store</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/sanskruti-tech' className='btn btn-primary' rel="noreferrer noopener" target='_blank' >Github</a>
            <a href='http://magentolearning.mydevportals.com/' className='btn btn-primary' rel="noreferrer noopener" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>This is Galaxy Website</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/sanskruti-tech' className='btn btn-primary' rel="noreferrer noopener" target='_blank' >Github</a>
            <a href='http://galaxy-site.herokuapp.com/' className='btn btn-primary' rel="noreferrer noopener" target='_blank'>Live Demo</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio