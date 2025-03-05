import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { language, translations } = useSelector((state) => state.language);

  return (
    <footer className="footer">
      <p className="footer-text">{translations[language].footerText}</p>
      <div className="footer-links">
        <a href="ccc" target="_blank" rel="noopener noreferrer">
          {translations[language].github}
        </a>
        <a href="bbb" target="_blank" rel="noopener noreferrer">
          {translations[language].personalBlog}
        </a>
        <a href="aaa" target="_blank" rel="noopener noreferrer">
          {translations[language].linkedin}
        </a>
        <a href="mailto:your.burcuusta@gmail.com">{translations[language].email}</a>
      </div>
    </footer>
  );
};

export default Footer;
