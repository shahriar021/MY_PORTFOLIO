import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Me...</h1>
      </div>
      <div className="contact-box">
        {/* Mail and Phone */}
        <div className="contact-info">
          <div className="email">
            <strong>Email:</strong> shahriarc19@gmail.com
          </div>
          <div className="phone">
            <strong>Phone:</strong> 01604173222
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shahriar021" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/shahriar021" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
 