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
            I'm Akash More, a passionate Full Stack Developer with 1.7 years of hands-on experience in building dynamic web and mobile applications using the <b>MERN stack</b> (<b>MongoDB</b>, <b>Express.js</b>, <b>ReactJS</b>, <b>Node.js</b>), <b>React Native</b>, and <b>Next.js</b>.

I specialize in creating high-performance, scalable, and responsive solutions—ranging from <b>CMS platforms</b> and <b>scanner apps</b> to <b>custom WordPress websites</b> and animated <b>frontend</b> interfaces. My experience includes <b>end-to-end development</b>, <b>UI/UX enhancement</b>, <b>API integration</b>, and <b>performance optimization</b>. Whether it's building from scratch or optimizing existing systems, I enjoy turning complex problems into elegant, efficient code.

Currently working at <b>Mayra Digital Technologies</b>, I've delivered projects that improved performance by up to <b>40%</b> and significantly enhanced user experience across platforms.✨✨
            </p>
            <p className={styles.desc}>
            I'm always excited to collaborate on innovative projects that push the boundaries of <b>tech</b> and <b>design</b>.            </p>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
