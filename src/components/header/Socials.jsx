import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https:///www.linkedin.com/in/raj-shende-350718204" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/shenderaj9021" target='_blank'><BsGithub/></a>
    </div>
  );
}

export default Socials;