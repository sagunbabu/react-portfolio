import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const data = [
    {
        id: 1,
        title: 'Graphic Design',
        service1: 'Logo Design',
        service2: 'Social Media Post Design',
        service3: 'Flyer Design',
        service4: 'Restaurant Menu Design',
    },
    {
        id: 2,
        title: 'U/I U/X Design',
        service1: 'UI for mobile and web apps',
        service2: 'Overlays and layouts for different platforms',
        service3: 'Overlays and layouts',
        service4: 'And, many more...',
    },
    {
        id: 3,
        title: 'Web Development',
        service1: 'Website using HTML, CSS, and Javascript',
        service2: 'Website using Wordpress',
        service3: 'Website using React (Frontend)',
        service4: 'Website using Node.js (Backend)',
    }

]

const services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                {
                    data.map(({ id, title, service1, service2, service3, service4 }) => {
                        return (
                            <article key={id} className="service">
                                <div className="service__head">
                                    <h3>{title}</h3>
                                </div>
                                <ul className="service__list">
                                    <li><BiCheck className='service__list-icon' />
                                        <p>{service1}</p>
                                    </li>
                                    <li><BiCheck className='service__list-icon' />
                                        <p>{service2}</p>
                                    </li>
                                    <li><BiCheck className='service__list-icon' />
                                        <p>{service3}</p>
                                    </li>
                                    <li><BiCheck className='service__list-icon' />
                                        <p>{service4}</p>
                                    </li>
                                </ul>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default services