import React from "react";
import { useSelector } from "react-redux";
import "./styles.css"; 
import profile from "/src/assets/profile.jpg";

const HeroSection = () => {
  const { language, translations } = useSelector((state) => state.language);

  return (
    <section className="hero-section">
      
      <div className="profile-container">
        <img src={profile} alt="Profile" className="profile-pic" />
      </div>

      
      <div className="hero-text">
        <h2>{translations[language].greeting}</h2>
        <h1>
          {translations[language].introduction}
          <span className="underline"></span>
        </h1>
        <p>{translations[language].description}</p>

      
        <div className="social-links">
          <a href="https://github.com/burcuusta">🔗 {translations[language].github}</a>
          <p>{translations[language].expectation} </p>
          <div className="freelance-info">
          <p>
            <strong>{translations[language].expectation1} </strong>
            <span className="highlight">{translations[language].expectation2} </span> Project.
          </p>
          <p> {translations[language].invite}
            </p>
          <a href="mailto:burcuusta93@gmail.com" className="email-link">
            {translations[language].email}
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
