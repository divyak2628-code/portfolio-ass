import "./About.css";
import Profile from "../assets/Profile.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-container">

        <div className="about-image">
          <img src={Profile} alt="Divya" />
        </div>

        <div className="about-content">

          <span className="small-title">
            WHO I AM
          </span>

          <h3>Java Full Stack Developer</h3>

          <p>
            Hi! I'm <b>Divya</b>, a Computer Science Engineering student passionate
            about Java Full Stack Development and building responsive web
            applications.
          </p>

          <p>
            I enjoy creating modern websites using HTML, CSS, JavaScript,
            React, Java, Spring Boot and MySQL.
          </p>

          <p>
            My goal is to become a professional Java Full Stack Developer and
            continuously improve my skills by building real-world projects.
          </p>

          <div className="about-tags">
            <span>🎓 CSE Student</span>
            <span>📍 Tamil Nadu</span>
            <span>💼 Open to Internship</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;