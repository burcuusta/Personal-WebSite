import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { language, translations } = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`profile-section ${darkMode ? "dark" : "light"}`}>
      <h2>{translations[language].profileTitle}</h2>
      <div className="profile-container">
        <div className="basic-info">
          <h3 className="info-title">{translations[language].basicInfo}</h3>
          <p><strong>{translations[language].birthDate}:</strong> 24.03.1996</p>
          <p><strong>{translations[language].city}:</strong> Ankara</p>
          <p><strong>{translations[language].education}:</strong> Hacettepe Üniversitesi, 2016</p>
          <p><strong>{translations[language].role}:</strong> Frontend, UI</p>
        </div>
        <div className="about-me">
          <h3>{translations[language].aboutMe}</h3>
          <p>
            
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
