import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z0gmua1', 'template_oqyvwap', form.current, 'POqMKaPOluIU3Yvwh')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>anukratimehta@gmail.com</h5>
            <a href="mailto:anukratimehta@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_icon'/>
            <h4>linkedIn</h4>
            <h5>Anukrati Mehta</h5>
            <a href="https://www.linkedin.com/in/anukrati-mehta/" target="_blank">Connect on LinkedIn</a>
          </article>

          <article className='contact_option'>
            <AiOutlineWhatsApp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <a href="https:/api.whatsapp.com/send?phone=+918746937402" target="_blank">Send a WhatsApp message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="text" name='email' placeholder='Your email' required />
          <textarea name="message" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact