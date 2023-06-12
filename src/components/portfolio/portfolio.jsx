import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/rpc.png'
import IMG2 from '../../assets/quiz.jpg'
import IMG3 from '../../assets/bookstore.jpg'
import IMG4 from '../../assets/movie.png'
import IMG5 from '../../assets/ckd.jpg'
import IMG6 from '../../assets/oasis-logo.jpeg'
import IMG7 from '../../assets/superior.jpg'


const data = [
    {
        id: 1,
        image: IMG6,
        title: 'Oasis Himalaya Treks and Expeditions'
    },
    {
        id: 2,
        image: IMG7,
        title: 'Superior Sportswear'
    }
]

const data1 = [
    {
        id: 1,
        image: IMG4,
        title: 'Movie Recommender App',
        github: 'https://github.com/sagunbabu',
        demo: 'https://app-movies-recommender.herokuapp.com/'
    },
    {
        id: 2,
        image: IMG5,
        title: 'Chronic Kidney Disease Prediction',
        github: 'https://github.com/sagunbabu/Final-Year-Project',
        demo: 'https://github.com/sagunbabu/Final-Year-Project'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Online Bookstore',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.github.io/bookstore/'
    },
    {
        id: 4,
        image: IMG1,
        title: 'Rock Paper Sciossors Game',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.github.io/rpc/'
    },
    {
        id: 5,
        image: IMG2,
        title: 'Quiz',
        github: 'https://github.com/sagunbabu',
        demo: 'https://sagunbabu.github.io/quiz/'
    }
    // {
    //     id: 6,
    //     image: '',
    //     title: 'Book My Seat',
    //     github: 'https://github.com/sagunbabu',
    //     demo: 'https://sagunbabu.com.np'
    // }
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Inventory</h5>
            <h2>Portfolio</h2>
            <h2>Graphic Designs</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="portfolio__icon-image">
                                    <h3>{title}</h3>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <br />
            <br />
            <h2>Web Development</h2>
            <div className="container portfolio__container">
                {
                    data1.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="portfolio__icon-image">
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-cta">
                                        {/* <a href={github} className='btn' target='_blank'>Github</a> */}
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