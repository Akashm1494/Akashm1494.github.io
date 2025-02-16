import React from "react";
import styles from "./Home.module.css";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Home = () => {
  return (
    <section className={styles.home_section} id="home">
      <div className={styles.home_left}>
        <img
          className={styles.image}
          src={process.env.PUBLIC_URL + "/profile/AkashMore.png"}
          alt="Akash More"
        />
      </div>
      <div className={styles.home_right}>
        <p className={styles.greet}>Hi, my name is</p>
        <h1 className={styles.heading_1}>
          Akash <span>More.</span>
        </h1>
        <p className={styles.desc}>
          Aspiring Full-Stack Web Developer skilled in JavaScript and React.
        </p>
        <div className={styles.social_icons}>
          <a href="https://github.com/kali2498" target="_blank">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-more-680180258/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/akash_more_2410/" target="_blank">
            <FiInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
