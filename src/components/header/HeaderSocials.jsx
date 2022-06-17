import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/sagunbabu/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/sagunbabu" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/sagunbabu_/" target="_blank"><FiInstagram /></a>
        </div>
    )
}

export default HeaderSocials