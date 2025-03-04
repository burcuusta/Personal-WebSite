import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "/src/components/styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <HeroSection />
      </div>
    </Provider>
  );
};

export default App;
