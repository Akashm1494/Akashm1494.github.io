import React from "react";
import styles from "./About.module.css";
import { FiUserCheck, FiCode, FiAward, FiBriefcase } from "react-icons/fi";

const About = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.aboutUs_wrapper}>
        <div className={styles.heading}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.title_bg}>About Me</div>
        </div>

        <div className={styles.AboutUS_container}>
          <div className={styles.left}>
            <h3 className={styles.subtitle}>
              <FiUserCheck className={styles.icon} /> Get to Know me!
            </h3>

            <div className={styles.about_cards}>
              <div className={styles.about_card}>
                <FiCode className={styles.card_icon} />
                <h4>Experience</h4>
                <p>1.7+ Years</p>
              </div>
              <div className={styles.about_card}>
                <FiAward className={styles.card_icon} />
                <h4>Projects</h4>
                <p>10+ Completed</p>
              </div>
              <div className={styles.about_card}>
                <FiBriefcase className={styles.card_icon} />
                <h4>Company</h4>
                <p>Mayra Digital</p>
              </div>
            </div>

            <div className={styles.description}>
              <p className={styles.desc}>
                I'm{" "}
                <span className={styles.highlight}>Akash More</span>, a passionate
                Full Stack Developer with 1.7 years of hands-on experience in
                building dynamic web and mobile applications using the{" "}
                <b>MERN stack</b> (<b>MongoDB</b>, <b>Express.js</b>,{" "}
                <b>ReactJS</b>, <b>Node.js</b>), <b>React Native</b>, and{" "}
                <b>Next.js</b>.
              </p>

              <div className={styles.achievement_list}>
                <div className={styles.achievement_item}>
                  <span className={styles.bullet}>→</span>
                  <div>
                    <b>Professional Excellence:</b> Specialized in creating
                    high-performance, scalable solutions including CMS platforms,
                    scanner apps, and custom WordPress websites
                  </div>
                </div>
                <div className={styles.achievement_item}>
                  <span className={styles.bullet}>→</span>
                  <div>
                    <b>Technical Expertise:</b> Mastery in end-to-end development,
                    UI/UX enhancement, API integration, and performance optimization
                  </div>
                </div>
                <div className={styles.achievement_item}>
                  <span className={styles.bullet}>→</span>
                  <div>
                    <b>Impact & Results:</b> At Mayra Digital Technologies,
                    delivered projects with 40% performance improvement and
                    enhanced user experience
                  </div>
                </div>
              </div>

              <p className={styles.desc}>
                I'm always excited to collaborate on innovative projects that
                push the boundaries of{" "}
                <span className={styles.highlight}>tech</span> and{" "}
                <span className={styles.highlight}>design</span>. Let's turn your
                ideas into reality! ✨
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.quote_container}>
              <div className={styles.quote_content}>
                <div className={styles.quote_icon}>"</div>
                <p>
                  Transforming ideas into elegant, efficient code and creating
                  seamless digital experiences that make a difference.
                </p>
                <div className={styles.quote_separator}></div>
                <div className={styles.passion_points}>
                  <div className={styles.passion_item}>
                    <span>🚀</span> Performance Optimization
                  </div>
                  <div className={styles.passion_item}>
                    <span>💡</span> Creative Problem Solving
                  </div>
                  <div className={styles.passion_item}>
                    <span>🎯</span> User-Centric Design
                  </div>
                  <div className={styles.passion_item}>
                    <span>🛠️</span> Clean Architecture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
