import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Education = () => {
  const educationData = [
    {
      title: "Masai School - Full-stack Web Development Program (Full Time)",
      date: "March 2022 -  2023",
      description: [
        "Spent 1300+ hours mastering algorithms, data structures, and full-stack development.",
        "Built projects using HTML, JavaScript, React, and Redux.",
        "Developed skills in remote pair-programming, GitHub workflows, and daily standups."
      ],
    },
    {
      title: "Yashwantrao Chavan Maharashtra Open University",
      date: "2018-2021",
      description: ["Bachelor of Arts"],
    },
  ];

  const workData = [
    {
      title: "Mayra Digital Technologies",
      date: "Sep 2023 - Present",
      description: [
        "Developed and deployed a mobile app using React Native.",
        "Built and optimized a scanner app for document management.",
        "Designed and developed 4 frontend websites with animations & responsive layouts.",
        "Customized and launched a WordPress website.",
      ],
    },
  ];

  return (
    <section className={styles.resume_section} id="resume">
      <div className={styles.heading}>
        <h4 className={styles.title}>Resume</h4>
      </div>
      <div className={styles.container}>
        {/* Education Timeline */}
        <div className={styles.timeline_wrapper}>
          <div className={styles.timeline_heading}>
            <FaGraduationCap className={styles.timeline_icon} />
            <h4>Education</h4>
          </div>
          <div className={styles.timeline}>
            {educationData.map((edu, index) => (
              <div key={index} className={styles.timeline_item}>
                <div className={styles.timeline_dot}></div>
                <div className={styles.timeline_content}>
                  <h4 className={styles.timeline_title}>{edu.title}</h4>
                  <p className={styles.timeline_date}>{edu.date}</p>
                  <ul className={styles.timeline_desc}>
                    {edu.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className={styles.timeline_wrapper}>
          <div className={styles.timeline_heading}>
            <BsFillBriefcaseFill className={styles.timeline_icon} />
            <h4>Work Experience</h4>
          </div>
          <div className={styles.timeline}>
            {workData.map((work, index) => (
              <div key={index} className={styles.timeline_item}>
                <div className={styles.timeline_dot}></div>
                <div className={styles.timeline_content}>
                  <h4 className={styles.timeline_title}>{work.title}</h4>
                  <p className={styles.timeline_date}>{work.date}</p>
                  <ul className={styles.timeline_desc}>
                    {work.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
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
