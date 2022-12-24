import React from 'react';
import "./Experience.css";
import {FaReact, FaHtml5, FaGitAlt, FaJava,FaNodeJs} from 'react-icons/fa';
import {SiJavascript,SiRedux, SiCss3, SiSpringboot, SiCplusplus,SiExpress,SiMysql,SiMongodb} from 'react-icons/si';
import {MdHttp} from 'react-icons/md';



const Experience = () => {
  return (
    <section id='experience'>
        <h5>Technology Stack</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Front End</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <FaReact className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>React.js</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiJavascript className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>JavaScript</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiRedux className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Redux</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaHtml5 className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>HTML</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiCss3 className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>CSS</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaGitAlt className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Git</h4>
                        </div>
                    </article>
                </div>
            </div>

            <div className="experience__backend">
            <h3>Back End</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <FaNodeJs className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Node.js</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiExpress className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Express.js</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <MdHttp className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>REST API</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiMysql className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Mysql</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiMongodb className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Mongodb</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiCplusplus className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>C / C++</h4>
                        </div>
                    </article>            
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;