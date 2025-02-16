import React, { useState, useEffect } from "react";
import "./skills.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiCypress,
  SiWordpress,
  SiJquery,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiGit, DiVisualstudio, DiPhp } from "react-icons/di";

const tabs = [
  { title: "Frontend", id: "frontend" },
  { title: "Backend", id: "backend" },
  { title: "Tools", id: "tools" },
  { title: "DevOps", id: "devops" },
  { title: "Soft Skills", id: "professional" },
];

const skillsData = {
  frontend: [
    { name: "HTML", icon: <AiFillHtml5 /> },
    { name: "CSS", icon: <RiCss3Fill /> },
    { name: "SCSS", icon: <SiBootstrap /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "NextJS", icon: <TbBrandNextjs /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "Cypress", icon: <SiCypress /> },
  ],
  backend: [
    { name: "NodeJS", icon: <IoLogoNodejs /> },
    { name: "ExpressJS", icon: <SiExpress /> },
    { name: "REST APIs", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PHP", icon: <DiPhp /> },
  ],
  tools: [
    { name: "Git", icon: <DiGit /> },
    { name: "GitHub", icon: <AiFillGithub /> },
    { name: "VS Code", icon: <DiVisualstudio /> },
    { name: "Postman", icon: <DiVisualstudio /> },
    { name: "WordPress", icon: <SiWordpress /> },
  ],
  devops: [
    { name: "Docker", icon: <DiGit /> },
    { name: "CI/CD", icon: <DiGit /> },
    { name: "Jenkins", icon: <DiGit /> },
    { name: "AWS", icon: <DiGit /> },
  ],
  professional: [
    { name: "Communication", icon: <FaReact /> },
    { name: "Teamwork", icon: <FaReact /> },
    { name: "Problem Solving", icon: <FaReact /> },
    { name: "Creativity", icon: <FaReact /> },
  ],
};

const SkillsA = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  // Auto-change tabs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="experience" id="Skills">
      <h2 className="title">My Skills</h2>

      {/* TABS (ALWAYS VISIBLE) */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* SKILLS GRID */}
      <div className="skills-container">
        {skillsData[activeTab].map((skill, index) => (
          <div key={index} className="skills_card">
            {skill.icon}
            <small>{skill.name}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsA;
