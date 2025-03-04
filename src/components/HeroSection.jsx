import React from "react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { language, translations } = useSelector((state) => state.language);

  return (
    <section className="hero-section">
      <h2>{translations[language].greeting}</h2>
      <h1>
        {translations[language].introduction}
        <span className="underline"></span>
      </h1>
      <p>{translations[language].description}</p>

      <div className="social-links">
        <a href="#">🔗 {translations[language].github}</a>
        <a href="mailto:pratamaisoi@gmail.com" className="email-link">
          {translations[language].email}
        </a>
      </div>

    
      <div className="profile-container">
        <img src="/profile.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default HeroSection;
