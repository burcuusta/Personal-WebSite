import React from "react";
import { useSelector } from "react-redux";
import "./styles.css"; // CSS dosyanı dahil ediyorum

const HeroSection = () => {
  const { language, translations } = useSelector((state) => state.language);

  return (
    <section className="hero-section">
      {/* Profil Fotoğrafı */}
      <div className="profile-container">
        <img src="/src/img/profile.jpg" alt="Profile" className="profile-pic" />
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
          <a href="mailto:burcuusta93@gmail.com" className="email-link">
            {translations[language].email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
