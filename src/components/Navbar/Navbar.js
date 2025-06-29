import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import AkashMore_FullStackDeveloper_2025 from "./AkashMore_FullStackDeveloper_2025.pdf";

const NavbarSkeleton = () => {
  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.desktopMenu}>
          <div className={styles.nav_left}>
            <div
              className={`${styles.skeleton_text} ${styles.skeleton_pulse}`}
              style={{ width: "80px", height: "24px" }}
            ></div>
          </div>
          <div className={styles.nav}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className={`${styles.skeleton_text} ${styles.skeleton_pulse}`}
                style={{ width: "60px", height: "20px" }}
              ></div>
            ))}
          </div>          <div className={styles.nav_right}>
            <div className={styles.theme_icon}>
              <div
                className={`${styles.skeleton_icon} ${styles.skeleton_pulse}`}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <div className={styles.nav_resume_skeleton}>
              <div
                className={`${styles.skeleton_button} ${styles.skeleton_pulse}`}
                style={{
                  width: "100px",
                  height: "36px",
                  borderRadius: "30px",
                  margin: "0 8px"
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className={styles.mobileMenu}>
          <div className={styles.nav_left}>
            <div
              className={`${styles.skeleton_text} ${styles.skeleton_pulse}`}
              style={{ width: "80px", height: "24px" }}
            ></div>
          </div>
          <div className={styles.nav_right}>
            <div
              className={`${styles.skeleton_icon} ${styles.skeleton_pulse}`}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
              }}
            ></div>
            <div
              className={`${styles.skeleton_icon} ${styles.skeleton_pulse}`}
              style={{ width: "24px", height: "24px" }}
            ></div>
          </div>
        </div>
      </nav>
      <div className={styles.dummy_header}></div>
    </>
  );
};

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(true);
  const { changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    changeTheme();
  };

  const toggleMobileMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  if (loading) {
    return <NavbarSkeleton />;
  }

  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.desktopMenu}>
          <div className={styles.nav_left}>
            <a href="#home">
              <img src="/logos/Akash-Logo.png" alt="Main-Logo" className={styles.logo} />
            </a>
          </div>
          <div className={styles.nav}>
            <a href="#about" className={styles.nav_link}>
              About
            </a>
            {/* <a href="#Skills" className={styles.nav_link}>
              Skills
            </a> */}
            <a href="#resume" className={styles.nav_link}>
              Education
            </a>

            <a href="#projects" className={styles.nav_link}>
              Projects
            </a>
            <a href="#contact" className={styles.nav_link}>
              Contact
            </a>
          </div>
          <div className={styles.nav_right}>
            <div className={styles.theme_icon} onClick={toggleTheme}>
              {darkTheme ? <CgSun /> : <HiOutlineMoon />}
            </div>

            <a href={AkashMore_FullStackDeveloper_2025} target="_blank" download>
              <button
                onClick={() =>
                  window.open(
                    `https://drive.google.com/file/d/1w0D_H6ZtV7p_Gt9aM4arIz5r2AYUUu7z/view`
                  )
                }
                className={styles.nav_resume_btn}
              >
                Resume
              </button>
            </a>
          </div>
        </div>

        <div className={styles.mobileMenu}>
          {/* Hamburger menu */}
          <div className={styles.nav_left}>
            <a href="#home">
              <img src="/logos/Akash-Logo.png" alt="Main-Logo" className={styles.logo} />
            </a>
          </div>
          <div
            className={`${styles.navMobile} ${isMenuClicked ? styles.active : ""
              }`}
          >
            <a
              href="#about"
              onClick={toggleMobileMenu}
              className={styles.nav_link}
            >
              About
            </a>
            {/* <a
              href="#Skills"
              onClick={toggleMobileMenu}
              className={styles.nav_link}
            >
              Skills
            </a> */}
            <a
              href="#resume"
              onClick={toggleMobileMenu}
              className={styles.nav_link}
            >
              Education
            </a>

            <a
              href="#projects"
              onClick={toggleMobileMenu}
              className={styles.nav_link}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={toggleMobileMenu}
              className={styles.nav_link}
            >
              Contact
            </a>
            <a href={AkashMore_FullStackDeveloper_2025.pdf} target="_blank" download>
              <button
                onClick={() =>
                  window.open(
                    `https://drive.google.com/file/d/1-9P322iNK10pficUSS7eNIOJDpbp2dIL/view?usp=sharing`
                  )
                }
                className={styles.nav_resume_btn}
              >
                Resume
              </button>
            </a>
          </div>
          <div className={styles.nav_right}>
            <div className={styles.theme_icon} onClick={toggleTheme}>
              {darkTheme ? <CgSun /> : <HiOutlineMoon />}
            </div>
            <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
              {isMenuClicked ? <IoClose /> : <GiHamburgerMenu />}
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.dummy_header}></div>
    </>
  );
}

export default Navbar;
