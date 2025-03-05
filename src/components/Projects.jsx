import React from "react";
import { useSelector } from "react-redux";
import user from "../assets/user.png";
import book from "../assets/book.jpg";

const projects = [
  {
    id: 1,
    titleKey: "myBankAccount",
    tags: ["react", "vercel", "axios", "router"],
    github: "#",
    app: "#",
    imgSrc: `${user}`,
    bgColor: "#D8EAFE",
  },
  {
    id: 2,
    titleKey: "DOM-Quotes",
    tags: ["react", "redux", "axios", "router", "vercel"],
    github: "#",
    app: "#",
    imgSrc: `${book}`,
    bgColor: "#D4F4E8",
  },
];

const Projects = () => {
  const { language, translations } = useSelector((state) => state.language);

  return (
    <section className="projects-section">
      <h2>{translations[language].projectsTitle}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{ backgroundColor: project.bgColor }}
          >
            <h3>{project.titleKey}</h3>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github}>{translations[language].viewOnGithub}</a>
              <a href={project.app}>{translations[language].goToApp}</a>
            </div>
            <img src={project.imgSrc} alt={project.titleKey} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
