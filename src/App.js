import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { createContext } from "react";
import SkillsA from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  const body = document.getElementsByTagName("BODY")[0];

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      body.style.background = "#020B0D";
      body.style.color = "#FFFFFF";
    } else {
      body.style.background = "#ffffff";
      body.style.color = "#656d72";
    }
  }, [theme]);

  useEffect(() => {
    // Simulate loading delay of 3.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        {loading ? (
          <SkeletonLoader theme={theme} />
        ) : (
          <>
            <Home />
            <About />
            <SkillsA />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;