import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { FaDribbble } from 'react-icons/fa'

const footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Sagun</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://github.com"><AiFillGithub /></a>
                <a href="https://dribble.com"><FaDribbble /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Sagun. All rights reserved</small>
            </div>
        </footer>
    )
}

export default footer