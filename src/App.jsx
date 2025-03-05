import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import "./components/styles.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <HeroSection />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
