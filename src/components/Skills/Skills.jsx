import React, { useState, useEffect, useRef } from "react";
import "./skills.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiTypescript, SiExpress, SiMongodb, SiMysql, SiBootstrap, SiWordpress, SiJquery, SiGithubactions,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiGit, DiVisualstudio, DiPhp } from "react-icons/di";
import { SiPostman } from "react-icons/si";

const tabs = [
  { title: "Frontend", id: "frontend" },
  { title: "Backend", id: "backend" },
  { title: "Tools", id: "tools" },
];

const skillsData = {
  frontend: [
    { name: "HTML", icon: <AiFillHtml5 />, proficiency: 90 },
    { name: "CSS", icon: <RiCss3Fill />, proficiency: 85 },
    { name: "SCSS", icon: <SiBootstrap />, proficiency: 75 },
    { name: "JavaScript", icon: <IoLogoJavascript />, proficiency: 85 },
    { name: "ReactJS", icon: <FaReact />, proficiency: 80 },
    { name: "Redux", icon: <SiRedux />, proficiency: 75 },
    { name: "TypeScript", icon: <SiTypescript />, proficiency: 70 },
    { name: "NextJS", icon: <TbBrandNextjs />, proficiency: 65 },
    { name: "Bootstrap", icon: <SiBootstrap />, proficiency: 80 },
    { name: "jQuery", icon: <SiJquery />, proficiency: 75 },
  ],
  backend: [
    { name: "NodeJS", icon: <IoLogoNodejs />, proficiency: 75 },
    { name: "ExpressJS", icon: <SiExpress />, proficiency: 70 },
    { name: "REST APIs", icon: <SiExpress />, proficiency: 80 },
    { name: "MongoDB", icon: <SiMongodb />, proficiency: 75 },
    { name: "MySQL", icon: <SiMysql />, proficiency: 70 },
    { name: "PHP", icon: <DiPhp />, proficiency: 60 },
  ],
  tools: [
    { name: "Git", icon: <DiGit />, proficiency: 85 },
    { name: "GitHub", icon: <AiFillGithub />, proficiency: 80 },
    { name: "VS Code", icon: <DiVisualstudio />, proficiency: 90 },
    { name: "Postman", icon: <SiPostman />, proficiency: 85 },
    { name: "WordPress", icon: <SiWordpress />, proficiency: 70 },
  ],
};

const SkillsA = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    }
  }, []);

  // Auto-change tabs every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 1000000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="skills-section" id="Skills" ref={sectionRef}>
      <div className="animated-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>
      
      <div className={`section-content ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">My Skills</h2>

        {/* TABS */}
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tab.title}
            </div>
          ))}
        </div>

        <div className="skills-container">
          {skillsData[activeTab].map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-info">
                <div className="Skill-icon-Name">{skill.icon}</div>
              </div>
              
              {/* Tooltip with additional info */}
              <div className={`skill-tooltip ${hoveredSkill === skill.name ? 'visible' : ''}`}>
                <p className="tooltip-title">{skill.name}</p>
                <div className="tooltip-proficiency">
                  <span>Proficiency:</span>
                  <div className="tooltip-bar-container">
                    <div className="tooltip-bar" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                  <span>{skill.proficiency}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary-color, #6a11cb)" />
            <stop offset="100%" stopColor="var(--secondary-color, #2575fc)" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default SkillsA;
