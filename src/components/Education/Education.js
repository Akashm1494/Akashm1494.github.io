import React, { useEffect, useState } from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Education = () => {
  // Add state to track if device is mobile
  const [isMobile, setIsMobile] = useState(false);

  const educationData = [
    {
      title: "Masai School - Full-stack Web Development Program (Full Time)",
      date: "April 2022 - April 2023",
      description: [
        "Completed intensive 1200+ hours of hands-on coding with weekly code reviews and performance evaluations.",
        "Built full-stack applications using HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Node.js, Express.js, and MongoDB.",
        "Collaborated in monthly Agile-based team projects with real-world development cycles including stand-ups, sprints, and version control."
      ],
    },
    {
      title: "Yashwantrao Chavan Maharashtra Open University (YCMOU), Pune",
      date: "2018-2021",
      description: ["Bachelor of Arts (B.A.)"],
    },
  ];

  const workData = [
    {
      title: "MySathi Tech Pvt. Ltd.", // Put current job first
      date: "June 2025 - Present",
      description: [
        "Developing scalable web and mobile applications using React.js, Next.js, and React Native.",
        "Building and integrating robust REST APIs using Node.js, Express.js, and TypeScript.",
        "Managing MongoDB database architecture for optimized data storage and retrieval.",
        "Leading full-stack project deployments with seamless UI to backend integration."
      ],
    },
    {
      title: "Mayra Digital Technologies",
      date: "Sep 2023 - June 2025",
      description: [
        "Developed and deployed responsive UI components using ReactJS, improving load speed by 30%.",
        "Built cross-platform mobile apps using React Native and NativeBase for iOS and Android platforms.",
        "Created a document scanner app using React Native and Node.js, boosting processing speed by 40%.",
        "Customized WordPress websites from Figma designs using Bootstrap, jQuery, GSAP, and PHP."
      ],
    },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial load
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Add AOS animation library
  useEffect(() => {
    // Add AOS script if not already in document
    if (!document.querySelector('script[src*="aos"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
      script.async = true;
      document.body.appendChild(script);

      // Add AOS CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
      document.head.appendChild(link);

      // Initialize AOS after script loads
      script.onload = () => {
        window.AOS.init({
          duration: 1000,
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          // Disable animations on mobile
          disable: isMobile
        });
      };
    } else {
      // If script already exists, just initialize
      if (window.AOS) {
        window.AOS.init({
          disable: isMobile // Disable animations on mobile
        });
      }
    }
  }, [isMobile]); // Add isMobile as dependency

  return (
    <section className={styles.resume_section} id="resume">
      <div className={styles.section_background}></div>
      <div className={styles.heading} data-aos={!isMobile ? "fade-down" : ""}>
        <h4 className={styles.title}>Experience</h4>
      </div>
      <div className={styles.container}>
        {/* Education Timeline */}
        <div
          className={`${styles.timeline_wrapper} ${isMobile ? styles.mobile_wrapper : ''}`}
          data-aos={!isMobile ? "fade-right" : ""}
          data-aos-delay={!isMobile ? "100" : "0"}
        >
          <div className={styles.timeline_heading}>
            <div className={styles.icon_wrapper}>
              <FaGraduationCap className={styles.timeline_icon} />
            </div>
            <h4>Education</h4>
          </div>
          <div className={styles.timeline}>
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`${styles.timeline_item} ${isMobile ? styles.mobile_item : ''}`}
                data-aos={!isMobile ? "fade-up" : ""}
                data-aos-delay={!isMobile ? 200 + (index * 100) : 0}
              >
                <div className={styles.timeline_dot}></div>
                <div className={`${styles.timeline_content} ${isMobile ? styles.mobile_content : ''}`}>
                  <h4 className={styles.timeline_title}>{edu.title}</h4>
                  <p className={styles.timeline_date}>{edu.date}</p>
                  <ul className={styles.timeline_desc}>
                    {edu.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div
          className={`${styles.timeline_wrapper} ${isMobile ? styles.mobile_wrapper : ''}`}
          data-aos={!isMobile ? "fade-left" : ""}
          data-aos-delay={!isMobile ? "100" : "0"}
        >
          <div className={styles.timeline_heading}>
            <div className={styles.icon_wrapper}>
              <BsFillBriefcaseFill className={styles.timeline_icon} />
            </div>
            <h4>Work Experience</h4>
          </div>
          <div className={styles.timeline}>
            {workData.map((work, index) => (
              <div
                key={index}
                className={`${styles.timeline_item} ${isMobile ? styles.mobile_item : ''}`}
                data-aos={!isMobile ? "fade-up" : ""}
                data-aos-delay={!isMobile ? 200 + (index * 100) : 0}
              >
                <div className={styles.timeline_dot}></div>
                <div className={`${styles.timeline_content} ${isMobile ? styles.mobile_content : ''}`}>
                  <h4 className={styles.timeline_title}>{work.title}</h4>
                  <p className={styles.timeline_date}>{work.date}</p>
                  <ul className={styles.timeline_desc}>
                    {work.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;