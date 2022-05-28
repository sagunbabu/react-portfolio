import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f3kgurz', 'template_huiz063', form.current, 'n4VclGPsXZaJ8Pkvy')
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>sagunbabuadhikari@gmail.com</h5>
                        <a href="mailto:sagunbabuadhikari@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Sagun</h5>
                        <a href="https://m.me/sagunbabu" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>N/A</h5>
                        <a href="https://wa.me/917330774001" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Full Name' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <input type="subject" name='subject' placeholder='Subject' required />
                    <textarea name="message" rows="7" placeholder='Mesage' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact