import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/slices/themeSlice";
import { changeLanguage } from "../redux/slices/languageSlice";
import "./styles.css";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <header className={`header ${darkMode ? "dark-header" : "light-header"}`}>
      <h1 className="logo">Portfolio</h1>
      <div className="header-buttons">
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="button theme-toggle"
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        <button
          onClick={() => dispatch(changeLanguage(language === "en" ? "tr" : "en"))}
          className="button lang-toggle"
        >  {language === "en" ? "Türkçe'ye Geç" : "Switch to English"}
        </button>
      </div>
    </header>
  );
};

export default Header;
