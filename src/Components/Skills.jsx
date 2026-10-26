import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiGithub } from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
      desc: "Responsive Web Pages",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
      desc: "Modern UI Design",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      desc: "Interactive Websites",
    },
    {
      icon: <FaReact />,
      title: "React",
      desc: "Frontend Development",
    },
    {
      icon: <FaJava />,
      title: "Java",
      desc: "Core Java & OOP",
    },
    {
      icon: <SiSpringboot />,
      title: "Spring Boot",
      desc: "Backend Development",
    },
    {
      icon: <SiMysql />,
      title: "MySQL",
      desc: "Database",
    },
    {
      icon: <SiGithub />,
      title: "GitHub",
      desc: "Version Control",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>
        My <span>Skills</span>
      </h2>

      <p className="skills-subtitle">
        Technologies I use to build modern web applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.title}</h3>

            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;