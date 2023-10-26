import { useState } from 'react';
import './ProjectSection.css';
import proj1 from '../assets/SwiperImager.webp';

function ProjectSection() {
  const projects = Array(21).fill(proj1);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index:number) => {
    setActiveIndex(index);
  };

  return (
    <div className="project-section-container">
        <h1 className="project-section-title">Our Work</h1>
      <div className="project-section-helper">
        {projects.map((project, index) => (
          <div
            className={`project-unit ${index === activeIndex ? 'increaser' : ''}`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <img src={project} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
