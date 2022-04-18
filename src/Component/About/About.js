import React from 'react';
import img from '../../images/my.jpg'
import './About.css'

const About = () => {
  return (
    <div className='container cart'>
      <div className='info '>
        <h2>Name:Somon Ahamed</h2>
        <img className='img' src={img} alt="" />
      </div>
  <p>I am a student but i want to learning web development .i enjoying make website and development . My goal is to be a web developer.I want to wark all my life as a web developer or freelencer. </p>
    </div>
  );
};

export default About;