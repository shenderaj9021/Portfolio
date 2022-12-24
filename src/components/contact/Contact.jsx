import React, {useRef} from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsLinkedin} from 'react-icons/bs';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b0s7aqm', 'template_fxb2agj', form.current, '0UxcjjHZLqVBU83qf');
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
               
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4> 
                        <h5>rajshende220802@gmail.com</h5>
                        <a href="mailto:rajshende220802@gmail.com">Email me!</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4> 
                        <h5>in/rajshende</h5>
                        <a href='https:///www.linkedin.com/in/raj-shende-350718204' target='_blank'>Message me on LinkedIn!</a>
                    </article>
                
            </div>
        </section>
    );
}

export default Contact;