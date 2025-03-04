import React from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "/src/components/styles.css"; 

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <Provider store={store}>
      <div className={darkMode ? "dark" : "light"}>
        <Header />
        <HeroSection />
      </div>
    </Provider>
  );
};

export default App;
