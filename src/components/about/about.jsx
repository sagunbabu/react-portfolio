import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
    return (
        <section id='about'>
            <h5>Hey</h5>
            <h2>Regarding Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>0.5+ Years</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>5+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>7+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Quick learning of new skills and programming languages, problem solving,
                        responsive design principles are some of my specialties. So far, I've got
                        HTML, JavaScript, CSS, jQuery, PHP, Python, MySQL, Bootstrap, and React.js
                        under my hood. I've enthusiastically started learning Node.JS, and MongoDB.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default about