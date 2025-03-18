import React from "react";
import styles from "./HomeSkeleton.module.css";

const HomeSkeleton = ({ theme }) => {
  return (
    <section className={styles.home_section}>
      {/* Background Elements Skeleton */}
      <div className={styles.animated_background}>
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
        <div className={styles.circle_3}></div>
      </div>
      
      {/* Left Section - Profile Image Skeleton */}
      <div className={styles.home_left}>
        <div className={`${styles.image_container} ${styles.image_skeleton}`}>
          <div className={styles.image_overlay}></div>
        </div>
      </div>

      {/* Right Section - Text & Social Links Skeleton */}
      <div className={styles.home_right}>
        <div className={styles.content_wrapper}>
          <div className={`${styles.greet} ${styles.greet_skeleton}`}>
            <span className={styles.greet_line}></span>
          </div>
      
          <div className={`${styles.heading_1} ${styles.name_skeleton}`}></div>
          
          <div className={styles.desc_container}>
            <div className={`${styles.desc} ${styles.desc_skeleton}`}></div>
          </div>

          {/* Social Media Icons Skeleton */}
          <div className={styles.social_icons}>
            <div className={`${styles.icon_skeleton}`}></div>
            <div className={`${styles.icon_skeleton}`}></div>
            <div className={`${styles.icon_skeleton}`}></div>
          </div>
          
          <div className={styles.cta_button}>
            <div className={`${styles.contact_btn} ${styles.button_skeleton}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSkeleton;