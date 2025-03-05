import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsGithub, BsLink } from "react-icons/bs";
import styles from "./Projects.module.css";
import { ThemeContext } from "../../App"; 

const Projects = () => {
  const { theme } = useContext(ThemeContext); 
  const [sliderRef, setSliderRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const projects = [
    {
      img: "/projects/IKEA.png",
      name: "E-Commerce Website",
      tech: ["ReactJs", "Aos", "Redux", "Redux-Thunks"],
      dec: "IKEA sells kitchen appliances, decoration, and home accessories.",
      link: "https://rococo-sawine-4218f1.netlify.app/",
      glink: "https://github.com/pgariya/fleet-purpose-8648",
    },
    {
      img: "/projects/Wrike.png",
      name: "Management Website",
      tech: ["ReactJs", "Redux", "Redux-Thunks", "Chakra-UI"],
      dec: "Wrike is a work management platform that helps business teams collaborate.",
      link: "https://proflow.netlify.app",
      glink: "https://github.com/VI-PAUL/Wrike-Clone",
    },
    {
      img: "/projects/mailchimp.png",
      name: "E-mail Marketing Website",
      tech: ["HTML", "CSS", "Javascript", "font-awesome"],
      dec: "Mailchimp is a marketing automation platform and email service.",
      link: "https://peaceful-concha-590692.netlify.app",
      glink: "https://github.com/kal2498/MailChimp_website-Clone",
    },
    {
      img: "/projects/beuty-bebo.png",
      name: "E-Commerce Website",
      tech: ["ReactJS", "ChakraUI", "React-Icons"],
      dec: "Beauty Bebo is India's fastest-growing online retail store.",
      link: "https://incredible-rolypoly-ca9c8f.netlify.app/",
      glink: "https://github.com/kali498/BeutyBebo-website-Clone",
    },
    {
      img: "/projects/anthro.png",
      name: "E-Commerce Website",
      tech: ["ReactJS", "ChakraUI", "React-Icons"],
      dec: "Anthropologie's unique collection of women's clothing, gifts, and more.",
      link: "https://shiny-crumble-fca118.netlify.app/",
      glink: "https://github.com/kal2498/Anthropologie-website-Clone",
    },
  ];

  return (
    <section className={`${styles.projects} ${isVisible ? styles.visible : ''}`} id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Projects</h2>
      </div>

      <div className={styles.sliderContainer}>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={process.env.PUBLIC_URL + project.img}
                    alt={project.name}
                    className={styles.projectImage}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.links}>
                      <a href={project.link} target="_blank" rel="noreferrer" className={styles.link}>
                        <BsLink />
                      </a>
                      <a href={project.glink} target="_blank" rel="noreferrer" className={styles.link}>
                        <BsGithub />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <p className={styles.description}>{project.dec}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.navigation}>
          <button onClick={sliderRef?.slickPrev} className={styles.navButton}>
            <FaChevronLeft />
          </button>
          <button onClick={sliderRef?.slickNext} className={styles.navButton}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;