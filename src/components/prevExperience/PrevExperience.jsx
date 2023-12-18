import React from 'react';
import './prevExperience.css'
import tracelink from "../../assests/tracelink.jpg"
import rebert from "../../assests/rebert.jfif"

const exp = [
    { 
        id: 1,
        image: tracelink,
        title: 'Tracelink ',
        position: 'Software Engineering Intern',
        date: 'June 2023 - July 2023',
        description: 'Developed a robust MERN stack-based system with Redis, AWS, for generating and visualizing performance reports'
    },
    { 
        id: 2,
        image:rebert ,
        title: 'Rebert Technologies',
        position: 'Fullstack Developer Intern',
        date: 'Aug 2023',
        description: 'Contributed to the collaborative development of a user-friendly web platform for property dealers, emphasizing enhancements to the user interface'
        
       
    }
]

const PrevExperience = () => {
    return (
        <section id='Experience'>
            <h5>Previous</h5>
            <h2>Experience</h2>
    
            <div className="container portfolio__container">
               {exp.map((achivement) => {
                return (
                    <article key={achivement.id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={achivement.image} alt={achivement.title} />
                        </div> 
                        <h3>{achivement.title}</h3>
                        <h5>{achivement.position}</h5>
                        <h6>{achivement.date}</h6>
                        <small className='portfolio__desc'>
                            {achivement.description}
                        </small>
                   </article>
                )
                }) 
                }
            </div>
        </section>
      );
}

export default PrevExperience