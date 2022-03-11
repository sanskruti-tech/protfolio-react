import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xz847b3', 'template_s2k6jmq', form.current, 'oN9f2Zikg8pp11j8H')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>borgaonkarsanskruti@gmail.com</h5>
            <a href='mailto:borgaonkarsanskruti@gmail.com' rel="noreferrer noopener" target='_blank'>Send Message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Portfolio</h5>
            <a href='https://m.me/sanskruti.borgaonkar' rel="noreferrer noopener" target='_blank'>Send Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>123456789</h5>
            <a href='https://api.whatsapp.com/' rel="noreferrer noopener" target='_blank'>Send Message</a>
            {/* <a href='https://api.whatsapp.com/send?phone+919067371021' rel="noreferrer noopener" target='_blank'> */}
          </article>
        </div>
        {/* End OF Contact OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email Id' required/>
          <textarea name='message' cols='30' rows='7' placeholder='Your Messege' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact