import React from 'react';
import '../../styles/Project.css'; // Assuming your CSS is in Projects.css
import '../../styles/appimage.png'; // Assuming your CSS is in Projects.css

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src={require('../../styles/appimage.png')} alt="Project 1" className="project-image" />
          <h2>Project 1</h2>
          <a href="/project-1" className="view-project-btn">View Project</a>
        </div>
        
        {/* Project 2 */}
        <div className="project-card">
          <img src={require('../../styles/appimage.png')} alt="Project 2" className="project-image" />
          <h2>Project 2</h2>
          <a href="/project-2" className="view-project-btn">View Project</a>
        </div>
        
        {/* Project 3 */}
        <div className="project-card">
          <img src={require('../../styles/appimage.png')} alt="Project 3" className="project-image" />
          <h2>Project 3</h2>
          <a href="/project-3" className="view-project-btn">View Project</a>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <img src={require('../../styles/appimage.png')} alt="Project 4" className="project-image" />
          <h2>Project 4</h2>
          <a href="/project-4" className="view-project-btn">View Project</a>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <img src={require('../../styles/appimage.png')} alt="Project 5" className="project-image" />
          <h2>Project 5</h2>
          <a href="/project-5" className="view-project-btn">View Project</a>
        </div>
      </div>
    </div>
  );
}
