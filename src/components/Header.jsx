import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/slices/themeSlice";
import { changeLanguage } from "../redux/slices/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const language = useSelector((state) => state.language.language);

  return (
    <header>
      <h1>Portfolio</h1>
      <div>
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="button theme-toggle"
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        <button
          onClick={() => dispatch(changeLanguage(language === "en" ? "tr" : "en"))}
          className="button lang-toggle"
        >
          {language === "en" ? "Türkçe'ye Geç" : "Switch to English"}
        </button>
      </div>
    </header>
  );
};

export default Header;
