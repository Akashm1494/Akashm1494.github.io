import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";


const LoadingSkeleton = () => {
  return (
    <section className={`${styles.home_section} ${styles.skeleton_section}`}>
      {/* Background Elements */}
      <div className={styles.animated_background}>
        <div className={`${styles.circle_1} ${styles.skeleton_pulse}`}></div>
        <div className={`${styles.circle_2} ${styles.skeleton_pulse}`}></div>
        <div className={`${styles.circle_3} ${styles.skeleton_pulse}`}></div>
      </div>

      {/* Left Section - Profile Image Skeleton */}
      <div className={styles.home_left}>
        <div className={styles.image_container}>
          <div className={`${styles.image_skeleton} ${styles.skeleton_pulse}`}>
            <div className={styles.image_overlay}></div>
          </div>
        </div>
      </div>

      {/* Right Section - Content Skeleton */}
      <div className={styles.home_right}>
        <div className={styles.content_wrapper}>
          {/* Greeting line skeleton */}
          <div className={styles.greet}>
            <div className={`${styles.greet_line} ${styles.skeleton_pulse}`}></div>
            <div className={`${styles.skeleton_text} ${styles.skeleton_pulse}`} style={{ width: '150px', height: '24px' }}></div>
          </div>

          {/* Name skeleton */}
          <div className={`${styles.heading_1} ${styles.skeleton_text} ${styles.skeleton_pulse}`} style={{ width: '300px', height: '50px', margin: "16px 0" }}></div>

          {/* Description skeleton */}
          {/* <div className={styles.desc_container}>
            <div className={`${styles.desc} ${styles.skeleton_text} ${styles.skeleton_pulse}`} style={{
              width: '100%',
              maxWidth: '420px',
              height: '24px',
              fontSize: '18px',
              lineHeight: '1.6',
              padding: '16px 0'
            }}></div>
          </div> */}

          {/* Social Icons skeleton */}
          <div className={styles.social_icons}>
            <div className={`${styles.skeleton_icon} ${styles.skeleton_pulse}`} style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
            <div className={`${styles.skeleton_icon} ${styles.skeleton_pulse}`} style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
            <div className={`${styles.skeleton_icon} ${styles.skeleton_pulse}`} style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
          </div>

          {/* Button skeleton */}
          <div className={styles.cta_button}>
            <div className={`${styles.skeleton_button} ${styles.skeleton_pulse}`} style={{ width: '150px', height: '45px', borderRadius: '30px' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};


const Home = () => {
  const [loading, setLoading] = useState(true);
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      const nameText = `Akash ${" "} More`;
      nameRef.current.textContent = '';

      Array.from(nameText).forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        span.className = styles.letter_animation;
        nameRef.current.appendChild(span);
      });
    }


    // Parallax effect for background
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      document.documentElement.style.setProperty('--mouse-x', x);
      document.documentElement.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);


    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <section className={styles.home_section} id="home">
      {/* Background Elements */}
      <div className={styles.animated_background}>
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
        <div className={styles.circle_3}></div>
      </div>

      {/* Left Section - Profile Image */}
      <div className={styles.home_left}>
        <div className={styles.image_container}>
          <img className={styles.image} src={process.env.PUBLIC_URL + "/profile/AkashMore.png"} alt="Akash More" />
          <div className={styles.image_overlay}></div>
        </div>
      </div>

      {/* Right Section - Text & Social Links */}
      <div className={styles.home_right}>
        <div className={styles.content_wrapper}>
          <p className={styles.greet}>
            <span className={styles.greet_line}></span>
            Hi, my name is
          </p>
          {/*<h1 className={styles.heading_1}>
            <span ref={nameRef}></span>
          </h1> */}
          <h1 className={styles.heading_1}>
            <span>Akash More</span>
          </h1>

          <div className={styles.desc_container}>
            <p className={styles.desc}>
              Aspiring Full-Stack Web Developer skilled in JavaScript and React.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className={styles.social_icons}>
            <a
              href="https://github.com/Akashm1494"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon_github}
            >
              <FiGithub />
              <span className={styles.icon_tooltip}>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/code-with-akash/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon_linkedin}
            >
              <FiLinkedin />
              <span className={styles.icon_tooltip}>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/akash_more_2410/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon_instagram}
            >
              <FiInstagram />
              <span className={styles.icon_tooltip}>Instagram</span>
            </a>
          </div>

          <div className={styles.cta_button}>
            <a href="#contact" className={styles.contact_btn}>Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;