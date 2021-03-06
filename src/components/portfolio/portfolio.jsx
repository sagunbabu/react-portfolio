import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Chronic Kidney Disease Prediction',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.com.np'
    },
    {
        id: 2,
        image: IMG1,
        title: 'Online Book Store',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.com.np'
    },
    {
        id: 3,
        image: IMG1,
        title: 'eCommerce Site',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.com.np'
    },
    {
        id: 4,
        image: IMG1,
        title: 'Real-time Chat Application',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.com.np'
    },
    {
        id: 5,
        image: IMG1,
        title: 'Quiz Web App',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.com.np'
    },
    {
        id: 6,
        image: IMG1,
        title: 'Rock Paper Sciossors Game',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.com.np'
    }
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="portfolio__icon-image">
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={github} className='btn' target='_blank'>Github</a>
                                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default portfolio