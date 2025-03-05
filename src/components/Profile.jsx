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
          <p><strong>{translations[language].birthDate}:</strong> 17.05.1993</p>
          <p><strong>{translations[language].city}:</strong> İzmir</p>
          <p><strong>{translations[language].education}:</strong> Bilkent, 2018</p>
          <p><strong>{translations[language].role}:</strong> Frontend, UI</p>
        </div>
        <div className="about-me">
          <h3>{translations[language].aboutMe}</h3>
          <p>
          {translations[language].aboutMeDesc}
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
