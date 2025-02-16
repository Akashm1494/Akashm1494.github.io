// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//          Hi IamAKash More HI All Of YOu....
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { createContext } from "react";
import GitHubStats from "./components/Github/GitHubStats";
import SkillsA from "./components/Skills/Skills";
// import GitHubStats from "./components/Github/GithubStats";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const body = document.getElementsByTagName("BODY")[0];

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      body.style.background = "#282d3f";
      body.style.color = "#dddddd";
    } else {
      body.style.background = "#ffffff";
      body.style.color = "#656d72";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        <Home />
        <About />
        <SkillsA />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
