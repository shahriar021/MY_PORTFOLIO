import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import '../../styles/Services.css'
import '../../styles/shahriar.JPG'
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      
      <div className="grids">
        <div className="nameNinfo">
        <div data-aos="fade-down" className="boxes">
          <img src={require('../../styles/shahriar.JPG')} style={{width:"200px",height:"200px"}}/>
        </div>
        <div data-aos="flip-up" className="boxes">
  Hi, I am Shahriar Chowdhury
</div>

        </div>
        <div data-aos="flip-up" className="boxes">
  I am a passionate Software Engineer specializing in React Native development. With hands-on experience in building scalable and user-friendly mobile applications, I thrive on creating solutions that merge innovative designs with robust functionality. Currently working in a dynamic startup environment, I have honed my skills in building apps from scratch, collaborating with teams, and delivering results under tight deadlines. My expertise includes frontend technologies, API integration, and optimizing app performance. I am always eager to embrace new challenges and continue growing as a developer.
</div>
        <div data-aos="flip-right" className="boxes skill-box">
  <h2 className="skill-title">My Skills</h2>
  <p className="skill-description">
    I specialize in front-end development with a focus on creating visually stunning and responsive web applications. My expertise includes:
  </p>
  <ul className="skills-list">
    <li>React & React Native</li>
    <li>HTML, CSS, JavaScript</li>
    <li>UI/UX Design</li>
    <li>Web & Mobile App Development</li>
    <li>API Integration</li>
  </ul>
</div>

        <div data-aos="flip-left" className="boxes">
          SQA
        </div>
        <div data-aos="slide-up" className="boxes">
          Problem Solving Instructor
        </div>
        <div className="boxes">Server/clent</div>
      </div>
    </div>
  )
}
