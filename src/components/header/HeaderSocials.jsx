import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaDiscord, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/sagunbabu/" target="_blank"><BsLinkedin /></a>
            <a href="https://wa.me/917330774001" target="_blank"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/sagunbabu_/" target="_blank"><FiInstagram /></a>
        </div>
    )
}

export default HeaderSocials