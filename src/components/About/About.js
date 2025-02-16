import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.aboutUs_wrapper}>
        <div className={styles.heading}>
          <h2 className={styles["title"]}>About Me</h2>
        </div>
        <div className={styles.AboutUS_container}>
          <div className={styles.left}>
            <h3>Get to Know me!</h3>
            <p className={styles.desc}>
              I’m Akash More, a passionate Full Stack Developer with over a year
              of experience in building dynamic and scalable web applications.
              Skilled in ReactJS, Node.js, MongoDB, and cloud-based solutions, I
              specialize in crafting seamless digital experiences that drive
              business success. Currently, I work at Mayra Digital Technologies,
              where I develop and optimize web and mobile applications, focusing
              on performance, user experience, and efficiency. From creating
              React Native mobile apps to designing responsive websites with
              modern front-end technologies, I thrive on solving complex
              problems and delivering impactful solutions. I have honed my
              skills through Masai School's intensive Full Stack Development
              Program, where I completed 1200+ hours of hands-on coding and
              worked on real-world projects using the MERN stack.✨✨
            </p>
            <p className={styles.desc}>
              I’m always eager to learn new technologies and take on challenges
              that push my boundaries. Let's collaborate and build something
              amazing together!
            </p>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
