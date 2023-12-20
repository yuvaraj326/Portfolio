import React from 'react'
import './project.css'
// import Hospital from '../../assets/Medical Healthcare Logo Design Template Vector Stock Vector (Royalty Free) 505959508 _ Shutterstock.jpg'
import project1 from '../../assets/project1.png'
import portfolio2 from '../../assets/potfolio2.jpg'
import img3 from '../../assets/mobile.png'


export default function project() {
  return (
    <section className='project section'id='project' >
      <div className="section-head">
        <span className='section-subtitle'> Browse My Recent </span>
        <h4 className='section-title'>Project</h4>
        </div>
        <div className='project-container container'>
            <div className="project-box">
                <div>
                    <img  className="project-img" src={portfolio2} alt="portfolio-img" />
                </div>
                <div className="project-details">
                    <h4>Portfolio</h4>
                    <div className="project-button">
                        <button className='button'>
                        <a href='https://github.com/yuvaraj326'>github</a>
                        </button>
                        <button className='button'>
                        <a href='https://yuvaraj326.github.io/Portfolio/'>livve demo</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div>
                    <img  className="project-img" src={project1} alt="hospital-img" />
                </div>
                <div className="project-details">
                    <h4>Hospital (React)</h4>
                    <div className="project-button">
                        <button className='button'>
                        <a href='https://github.com/yuvaraj326/Hospital-Web-App-React'>github</a>
                        </button>
                        <button className='button'>
                        <a href='https://yuvaraj326.github.io/Portfolio/'>livve demo</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div>
                    <img  className="project-img" src={img3} alt="hospital-img" />
                </div>
                <div className="project-details">
                    <h4>Hospital (SpingBoot)</h4>
                    <div className="project-button">
                        <button className='button'>
                        <a href='https://github.com/yuvaraj326/Hospital-Web-App-SpringBoot'>github</a>
                        </button>
                        <button className='button'>
                        <a href='https://yuvaraj326.github.io/Portfolio/'>livve demo</a>
                        </button>
                    </div>
                </div>
            </div>
           

        </div>
    </section>
    )
}
