import './ProjectSection.css';
import proj1 from '../assets/SwiperImager.webp';

function ProjectSection() {
  const projects = Array(28).fill(proj1);
  return (
    <div className="project-section-container">
      {projects.map((project, index) => (
        <div className="project-unit" key={index}>
          <img src={project} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;
