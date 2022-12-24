import React from 'react';
import './Achivements.css'
import sih from "../../assests/siha.png"
import ideazest from "../../assests/ideazest.png"

const achivements = [
    { 
        id: 1,
        image:sih ,
        title: 'Smart India Hackethon Winner ',
        position: '',
        date: 'Aug 2022',
        description: 'Winner of Smart India Hackathon 2022 under Senior Division for Problem Statement DR727'
    },
    { 
        id: 2,
        image:ideazest ,
        title: 'Ideazest  ',
        position: '',
        date: 'feb 2022',
        description: 'Winner of Ideazest in PICT CSI event. where we proposed prototype idea based on  blockchain technology'
        
       
    }
]

const Achivements = () => {
    return (
        <section id='achivements'>
            <h5>Recent</h5>
            <h2>Achievement</h2>
    
            <div className="container portfolio__container">
               {achivements.map((achivement) => {
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

export default Achivements