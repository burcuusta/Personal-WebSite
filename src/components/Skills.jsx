import React from "react";
import { useSelector } from "react-redux";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiFigma} from "react-icons/si";



const skills = [
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
   
    { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
  ];

const Skills = () => {
  const { language, translations } = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`skills-section ${darkMode ? "dark" : "light"}`}>
      <h2>{translations[language].skillsTitle}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ backgroundColor: skill.color }}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
