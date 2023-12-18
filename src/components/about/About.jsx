import React from 'react';
import './About.css';
import ME from "../../assests/me.jpeg"
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="A headshot of Lucas"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                   
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>Pune Institute of computer Technology <br/> Bachelor of Computer Engineering</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Hobbies</h5>
                        <small>Reading, Cricket & Coding</small>
                    </article>
                </div>
                <p>
                    I am a Final year Computer Engineering Student at Pune Institute of computer Technology. I have a strong passion for both front-end
                    and back-end development. I love to learn and I am always looking to learn
                    and experiment with new technologies!
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  );
}

export default About;