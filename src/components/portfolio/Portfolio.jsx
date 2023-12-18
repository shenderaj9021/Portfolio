import React from 'react';
import './Portfolio.css';
import spaceship from "../../assests/spaceship.png"
import sih from "../../assests/sih.png"
import xeniaverse  from "../../assests/xeniaverse.png"
import mcq from "../../assests/mcq.png"
import news from "../../assests/news.jpeg"
import onlinejudge from "../../assests/onlinejudge.png"

const projects = [
{ 
    id: 1,
    image: onlinejudge ,
    title: 'Online Judge (OJ)',
    position: '',
    date: 'june 2023 - Nov 2023',
    description: 'Led the development of a full-stack online judge platform. Enabled users to submit, run, and evaluate code for diverse programming problems. Implemented Redis pub-sub model to manage concurrency efficiently.Utilized Redis queues for handling multiple user code submissions concurrently. Employed Docker containers for secure and isolated execution of user-submitted code. Ensured platform stability and security by encapsulating code execution within containers'
},
{ 
    id: 2,
    image:spaceship ,
    title: 'Spaceship ',
    position: '',
    date: 'oct 2022 - Dec 2022',
    description: 'Created User‑friendly Social media platform for space‑interested people build using MERN Stack. Full responsive UI by Reactjs and Material UI. User authentication and authorization using jwt, and server build using Node and Express js and MongoDB use as the database. Techstack ‑ Nodejs, Expressjs, Mongodb,Reactjs, Redux toolkit, MUI, Jw.'
},
{ 
    id: 3,
    image: sih,
    title: 'Smart India Hackethon',
    position: "",
    date: 'Aug 2022',
    description: 'Developed a one‑point student and faculty verification portal for colleges under AICTE for ease of validation. The solution considerably reduces manual processing time by making it simple for AICTE to seamlessly integrate and check data from many source points, like UID, PAN, and NPCI. TechStack ‑ ReactJS,Tailwind CSS , Redux    '
},
{ 
    id: 4,
    image:  xeniaverse,
    title: 'xeniaverse',
    position: '',
    date: 'feb 2022 - march 2022',
    description: 'Build the website for the PICT CSI event Xeniaverse. The platform recorded a footfall of 3000+ registration. Used ReactJS, Redux, tailwind CSS for the development'
},
{ 
    id: 5,
    image:  mcq,
    title: 'MCQ Platform',
    position: '',
    date: 'june 2022 - Aug 2022',
    description: 'The goal of MCQ platform was to host a mcq test for different events in annual event of club. • About 100 user given a online mcq test on platform  Usedre ReactJS and Redux. Platform was fully Responsive    '
},
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;