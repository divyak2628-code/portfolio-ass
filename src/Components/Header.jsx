import "./Header.css";
import Profile from "../assets/Profile.jpg";

function Header() {
  return (
    <section className="hero" id="home">

      {/* Left Side */}
      <div className="hero-left">
        <div className="profile-card">

          <img src={Profile} alt="Profile" className="profile-img" />

          <div className="code-box">
            <p>const developer = {"{"}</p>
            <p><span>name:</span> "Divya",</p>
            <p><span>role:</span> "Java Full Stack Developer",</p>
            <p><span>passion:</span> "Coding"</p>
            <p>{"}"}</p>
          </div>

          <div className="available">
            🟢 Available for Work
          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className="hero-right">

        <div className="badges">
          <span>● Java Full Stack Developer</span>
        </div>

        <h1>
          Turning Vision <br />
          <span>Into Reality</span> <br />
          With Code
        </h1>

        <p>
          I am a passionate Java Full Stack Developer who enjoys building
          responsive websites and modern web applications using Java,
          Spring Boot, React, MySQL and REST APIs.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" download>
            <button className="btn-primary">
              Download Resume
            </button>
          </a>

          <a href="#contact">
            <button className="btn-secondary">
              Contact Me →
            </button>
          </a>
        </div>

      </div>

    </section>
  );
}

export default Header;