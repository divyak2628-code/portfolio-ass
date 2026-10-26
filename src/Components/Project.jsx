import "./Project.css";

function Project() {
  return (
    <section className="projects" id="projects">

      <div className="project-title">
        <h2>My <span>Projects</span></h2>
        <p>Some of the projects I have built.</p>
      </div>

      <div className="project-container">

        <div className="project-card purple">

          <div className="project-icon">💻</div>

          <h3>Perfume Website</h3>

          <p>
            Responsive perfume website built using HTML, CSS and JavaScript.
          </p>

          <div className="tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="buttons">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>

        </div>

        <div className="project-card blue">

          <div className="project-icon">🎓</div>

          <h3>Student Management</h3>

          <p>
            Student Management System using Java, Spring Boot, MySQL and React.
          </p>

          <div className="tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>React</span>
          </div>

          <div className="buttons">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>

        </div>

        <div className="project-card green">

          <div className="project-icon">🌐</div>

          <h3>Portfolio Website</h3>

          <p>
            Personal portfolio website created using React and CSS.
          </p>

          <div className="tech">
            <span>React</span>
            <span>CSS</span>
            <span>Responsive</span>
          </div>

          <div className="buttons">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Project;