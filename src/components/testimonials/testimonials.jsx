import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/about-me.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Coming Soon,',
        designation: 'Client',
        review: 'Your review here!'
    }
    // {
    //     avatar: AVTR1,
    //     name: 'Mandy',
    //     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas sed consequatur consectetur corrupti officia ad laboriosam quasi ullam fuga!'
    // },
    // {
    //     avatar: AVTR1,
    //     name: 'Sandy',
    //     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas sed consequatur consectetur corrupti officia ad laboriosam quasi ullam fuga!'
    // },
    // {
    //     avatar: AVTR1,
    //     name: 'Gandy',
    //     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas sed consequatur consectetur corrupti officia ad laboriosam quasi ullam fuga!'
    // }
]

const testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, designation, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h4>{name} <small className='client__designation'>{designation}</small></h4>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default testimonials