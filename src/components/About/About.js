// // import React from "react";
// // import styles from "./About.module.css";
// // import { FiUserCheck, FiCode, FiAward, FiBriefcase } from "react-icons/fi";

// // const About = () => {
// //   return (
// //     <section className={styles.about_section} id="about">
// //       <div className={styles.aboutUs_wrapper}>
// //         <div className={styles.heading}>
// //           <h2 className={styles.title}>About Me</h2>
// //           <div className={styles.title_bg}>About Me</div>
// //         </div>

// //         <div className={styles.AboutUS_container}>
// //           <div className={styles.left}>
// //             <h3 className={styles.subtitle}>
// //               <FiUserCheck className={styles.icon} /> Get to Know me!
// //             </h3>

// //             <div className={styles.about_cards}>
// //               <div className={styles.about_card}>
// //                 <FiCode className={styles.card_icon} />
// //                 <h4>Experience</h4>
// //                 <p>1.7+ Years</p>
// //               </div>
// //               <div className={styles.about_card}>
// //                 <FiAward className={styles.card_icon} />
// //                 <h4>Projects</h4>
// //                 <p>10+ Completed</p>
// //               </div>
// //               <div className={styles.about_card}>
// //                 <FiBriefcase className={styles.card_icon} />
// //                 <h4>Company</h4>
// //                 <p>Mayra Digital</p>
// //               </div>
// //             </div>

// //             <div className={styles.description}>
// //               <p className={styles.desc}>
// //                 I'm{" "}
// //                 <span className={styles.highlight}>Akash More</span>, a passionate
// //                 Full Stack Developer with 1.7 years of hands-on experience in
// //                 building dynamic web and mobile applications using the{" "}
// //                 <b>MERN stack</b> (<b>MongoDB</b>, <b>Express.js</b>,{" "}
// //                 <b>ReactJS</b>, <b>Node.js</b>), <b>React Native</b>, and{" "}
// //                 <b>Next.js</b>.
// //               </p>

// //               <div className={styles.achievement_list}>
// //                 <div className={styles.achievement_item}>
// //                   <span className={styles.bullet}>→</span>
// //                   <div>
// //                     <b>Professional Excellence:</b> Specialized in creating
// //                     high-performance, scalable solutions including CMS platforms,
// //                     scanner apps, and custom WordPress websites
// //                   </div>
// //                 </div>
// //                 <div className={styles.achievement_item}>
// //                   <span className={styles.bullet}>→</span>
// //                   <div>
// //                     <b>Technical Expertise:</b> Mastery in end-to-end development,
// //                     UI/UX enhancement, API integration, and performance optimization
// //                   </div>
// //                 </div>
// //                 <div className={styles.achievement_item}>
// //                   <span className={styles.bullet}>→</span>
// //                   <div>
// //                     <b>Impact & Results:</b> At Mayra Digital Technologies,
// //                     delivered projects with 40% performance improvement and
// //                     enhanced user experience
// //                   </div>
// //                 </div>
// //               </div>

// //               <p className={styles.desc}>
// //                 I'm always excited to collaborate on innovative projects that
// //                 push the boundaries of{" "}
// //                 <span className={styles.highlight}>tech</span> and{" "}
// //                 <span className={styles.highlight}>design</span>. Let's turn your
// //                 ideas into reality! ✨
// //               </p>
// //             </div>
// //           </div>

// //           <div className={styles.right}>
// //             <div className={styles.quote_container}>
// //               <div className={styles.quote_content}>
// //                 <div className={styles.quote_icon}>"</div>
// //                 <p>
// //                   Transforming ideas into elegant, efficient code and creating
// //                   seamless digital experiences that make a difference.
// //                 </p>
// //                 <div className={styles.quote_separator}></div>
// //                 <div className={styles.passion_points}>
// //                   <div className={styles.passion_item}>
// //                     <span>🚀</span> Performance Optimization
// //                   </div>
// //                   <div className={styles.passion_item}>
// //                     <span>💡</span> Creative Problem Solving
// //                   </div>
// //                   <div className={styles.passion_item}>
// //                     <span>🎯</span> User-Centric Design
// //                   </div>
// //                   <div className={styles.passion_item}>
// //                     <span>🛠️</span> Clean Architecture
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;


// import React, { useEffect, useRef } from "react";
// import { FiUserCheck, FiCode, FiAward, FiBriefcase, FiTrendingUp } from "react-icons/fi";

// const About = () => {
//   const cardRefs = useRef([]);
//   const achievementRefs = useRef([]);

//   useEffect(() => {
//     // Intersection Observer for cards animation
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry, index) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => {
//               entry.target.style.opacity = '1';
//               entry.target.style.transform = 'translateY(0) scale(1)';
//             }, index * 200);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     cardRefs.current.forEach(card => {
//       if (card) observer.observe(card);
//     });

//     achievementRefs.current.forEach(achievement => {
//       if (achievement) observer.observe(achievement);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section style={styles.aboutSection} id="about">
//       <div style={styles.aboutWrapper}>
//         <div style={styles.heading}>
//           <h2 style={styles.title}>About Me</h2>
//           <div style={styles.titleBg}>About Me</div>
//           <div style={styles.titleUnderline}></div>
//         </div>

//         <div style={styles.aboutContainer}>
//           <div style={styles.left}>
//             <h3 style={styles.subtitle}>
//               <FiUserCheck style={styles.icon} /> Get to Know me!
//             </h3>

//             <div style={styles.aboutCards}>
//               <div
//                 ref={el => cardRefs.current[0] = el}
//                 style={{ ...styles.aboutCard, ...styles.cardHidden }}
//               >
//                 <FiCode style={styles.cardIcon} />
//                 <h4 style={styles.cardTitle}>Experience</h4>
//                 <p style={styles.cardText}>1.10+ Years</p>
//                 <div style={styles.cardGlow}></div>
//               </div>
//               <div
//                 ref={el => cardRefs.current[1] = el}
//                 style={{ ...styles.aboutCard, ...styles.cardHidden }}
//               >
//                 <FiAward style={styles.cardIcon} />
//                 <h4 style={styles.cardTitle}>Projects</h4>
//                 <p style={styles.cardText}>15+ Completed</p>
//                 <div style={styles.cardGlow}></div>
//               </div>
//               <div
//                 ref={el => cardRefs.current[2] = el}
//                 style={{ ...styles.aboutCard, ...styles.cardHidden }}
//               >
//                 <FiBriefcase style={styles.cardIcon} />
//                 <h4 style={styles.cardTitle}>Current Company</h4>
//                 <p style={styles.cardText}>mySathi</p>
//                 <div style={styles.cardGlow}></div>
//               </div>
//             </div>

//             <div style={styles.description}>
//               <p style={styles.desc}>
//                 I'm{" "}
//                 <span style={styles.highlight}>Akash More</span>, a passionate
//                 Full Stack Developer with <strong>1.10+ years</strong> of hands-on experience in
//                 building dynamic web and mobile applications using the{" "}
//                 <strong style={styles.techHighlight}>MERN stack</strong> (
//                 <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
//                 <strong>ReactJS</strong>, <strong>Node.js</strong>),
//                 <strong style={styles.techHighlight}> React Native</strong>, and{" "}
//                 <strong style={styles.techHighlight}>Next.js</strong>.
//               </p>

//               <div style={styles.achievementList}>
//                 <div
//                   ref={el => achievementRefs.current[0] = el}
//                   style={{ ...styles.achievementItem, ...styles.achievementHidden }}
//                 >
//                   <div style={styles.bulletContainer}>
//                     <span style={styles.bullet}>💼</span>
//                   </div>
//                   <div>
//                     <strong style={styles.achievementTitle}>Current Role:</strong>
//                     Currently contributing as a Full Stack Developer at <strong style={styles.companyHighlight}>mySathi</strong> (June 2024 - Present),
//                     where I'm building innovative solutions and enhancing user experiences
//                   </div>
//                 </div>

//                 <div
//                   ref={el => achievementRefs.current[1] = el}
//                   style={{ ...styles.achievementItem, ...styles.achievementHidden }}
//                 >
//                   <div style={styles.bulletContainer}>
//                     <span style={styles.bullet}>🚀</span>
//                   </div>
//                   <div>
//                     <strong style={styles.achievementTitle}>Professional Excellence:</strong>
//                     Previously at Mayra Digital Technologies, specialized in creating
//                     high-performance, scalable solutions including CMS platforms,
//                     scanner apps, and custom WordPress websites
//                   </div>
//                 </div>

//                 <div
//                   ref={el => achievementRefs.current[2] = el}
//                   style={{ ...styles.achievementItem, ...styles.achievementHidden }}
//                 >
//                   <div style={styles.bulletContainer}>
//                     <span style={styles.bullet}>⚡</span>
//                   </div>
//                   <div>
//                     <strong style={styles.achievementTitle}>Technical Expertise:</strong>
//                     Mastery in end-to-end development, UI/UX enhancement, API integration,
//                     and performance optimization with proven results of <strong>40% performance improvement</strong>
//                   </div>
//                 </div>

//                 <div
//                   ref={el => achievementRefs.current[3] = el}
//                   style={{ ...styles.achievementItem, ...styles.achievementHidden }}
//                 >
//                   <div style={styles.bulletContainer}>
//                     <span style={styles.bullet}>🎯</span>
//                   </div>
//                   <div>
//                     <strong style={styles.achievementTitle}>Impact & Results:</strong>
//                     Delivered projects with significant performance improvements,
//                     enhanced user engagement, and streamlined development processes
//                   </div>
//                 </div>
//               </div>

//               <p style={styles.closingDesc}>
//                 I'm always excited to collaborate on innovative projects that
//                 push the boundaries of{" "}
//                 <span style={styles.highlight}>technology</span> and{" "}
//                 <span style={styles.highlight}>design</span>. Let's turn your
//                 ideas into reality! ✨
//               </p>
//             </div>
//           </div>

//           <div style={styles.right}>
//             <div style={styles.quoteContainer}>
//               <div style={styles.quoteContent}>
//                 <div style={styles.quoteIcon}>"</div>
//                 <p style={styles.quoteText}>
//                   Transforming ideas into elegant, efficient code and creating
//                   seamless digital experiences that make a difference.
//                 </p>
//                 <div style={styles.quoteSeparator}></div>

//                 <div style={styles.passionPoints}>
//                   <div style={styles.passionItem}>
//                     <span style={styles.passionEmoji}>🚀</span>
//                     <span>Performance Optimization</span>
//                   </div>
//                   <div style={styles.passionItem}>
//                     <span style={styles.passionEmoji}>💡</span>
//                     <span>Creative Problem Solving</span>
//                   </div>
//                   <div style={styles.passionItem}>
//                     <span style={styles.passionEmoji}>🎯</span>
//                     <span>User-Centric Design</span>
//                   </div>
//                   <div style={styles.passionItem}>
//                     <span style={styles.passionEmoji}>🛠️</span>
//                     <span>Clean Architecture</span>
//                   </div>
//                 </div>

//                 <div style={styles.skillBadges}>
//                   <span style={styles.skillBadge}>React.js</span>
//                   <span style={styles.skillBadge}>Node.js</span>
//                   <span style={styles.skillBadge}>Next.js</span>
//                   <span style={styles.skillBadge}>React Native</span>
//                   <span style={styles.skillBadge}>MongoDB</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   aboutSection: {
//     background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//     padding: '100px 0',
//     position: 'relative',
//     overflow: 'hidden',
//   },

//   aboutWrapper: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px',
//   },

//   heading: {
//     textAlign: 'center',
//     marginBottom: '80px',
//     position: 'relative',
//   },

//   title: {
//     fontSize: '3rem',
//     fontWeight: '800',
//     color: '#1a202c',
//     position: 'relative',
//     zIndex: 2,
//     background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     animation: 'titleSlideUp 1s ease-out',
//   },

//   titleBg: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     fontSize: '8rem',
//     fontWeight: '900',
//     color: 'rgba(59, 130, 246, 0.03)',
//     whiteSpace: 'nowrap',
//     zIndex: 1,
//     animation: 'backgroundFade 1.5s ease-out',
//   },

//   titleUnderline: {
//     width: '80px',
//     height: '4px',
//     background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
//     margin: '20px auto',
//     borderRadius: '2px',
//     animation: 'underlineExpand 1s ease-out 0.5s forwards',
//     transform: 'scaleX(0)',
//   },

//   aboutContainer: {
//     display: 'grid',
//     gridTemplateColumns: '1.5fr 1fr',
//     gap: '60px',
//     alignItems: 'start',
//   },

//   left: {
//     animation: 'slideInLeft 0.8s ease-out',
//   },

//   subtitle: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     fontSize: '1.5rem',
//     marginBottom: '40px',
//     color: '#2d3748',
//     fontWeight: '600',
//   },

//   icon: {
//     color: '#3b82f6',
//     fontSize: '1.8rem',
//   },

//   aboutCards: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '25px',
//     marginBottom: '40px',
//   },

//   aboutCard: {
//     background: 'rgba(255, 255, 255, 0.9)',
//     padding: '30px 20px',
//     borderRadius: '16px',
//     textAlign: 'center',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//     transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//     position: 'relative',
//     overflow: 'hidden',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     cursor: 'pointer',
//   },

//   cardHidden: {
//     opacity: 0,
//     transform: 'translateY(30px) scale(0.9)',
//   },

//   cardIcon: {
//     fontSize: '32px',
//     color: '#3b82f6',
//     marginBottom: '15px',
//     transition: 'transform 0.3s ease',
//   },

//   cardTitle: {
//     margin: '15px 0 8px',
//     color: '#2d3748',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//   },

//   cardText: {
//     color: '#64748b',
//     fontSize: '0.95rem',
//     fontWeight: '500',
//   },

//   cardGlow: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
//     opacity: 0,
//     transition: 'opacity 0.3s ease',
//     borderRadius: '16px',
//   },

//   description: {
//     animation: 'fadeInUp 1s ease-out 0.3s forwards',
//     opacity: 0,
//     transform: 'translateY(20px)',
//   },

//   desc: {
//     marginBottom: '30px',
//     lineHeight: '1.8',
//     color: '#4a5568',
//     fontSize: '1.05rem',
//   },

//   highlight: {
//     color: '#3b82f6',
//     fontWeight: '700',
//     background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//   },

//   techHighlight: {
//     color: '#10b981',
//     fontWeight: '600',
//   },

//   companyHighlight: {
//     color: '#8b5cf6',
//     fontWeight: '700',
//   },

//   achievementList: {
//     margin: '30px 0',
//   },

//   achievementItem: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     marginBottom: '25px',
//     padding: '20px',
//     background: 'rgba(255, 255, 255, 0.7)',
//     borderRadius: '12px',
//     backdropFilter: 'blur(5px)',
//     border: '1px solid rgba(255, 255, 255, 0.3)',
//     transition: 'all 0.3s ease',
//   },

//   achievementHidden: {
//     opacity: 0,
//     transform: 'translateX(-30px)',
//   },

//   bulletContainer: {
//     minWidth: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: '20px',
//     marginTop: '2px',
//   },

//   bullet: {
//     fontSize: '1.2rem',
//   },

//   achievementTitle: {
//     color: '#2d3748',
//     marginRight: '8px',
//   },

//   closingDesc: {
//     marginTop: '30px',
//     lineHeight: '1.8',
//     color: '#4a5568',
//     fontSize: '1.05rem',
//     fontStyle: 'italic',
//   },

//   right: {
//     animation: 'slideInRight 0.8s ease-out',
//   },

//   quoteContainer: {
//     background: 'rgba(255, 255, 255, 0.9)',
//     padding: '50px',
//     borderRadius: '24px',
//     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     position: 'relative',
//     overflow: 'hidden',
//   },

//   quoteContent: {
//     position: 'relative',
//     textAlign: 'center',
//     zIndex: 2,
//   },

//   quoteIcon: {
//     fontSize: '80px',
//     color: '#3b82f6',
//     opacity: 0.15,
//     lineHeight: 1,
//     marginBottom: '20px',
//     fontFamily: 'serif',
//   },

//   quoteText: {
//     fontSize: '1.3rem',
//     lineHeight: '1.7',
//     color: '#2d3748',
//     fontStyle: 'italic',
//     marginBottom: '35px',
//     fontWeight: '500',
//   },

//   quoteSeparator: {
//     width: '80px',
//     height: '4px',
//     background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
//     margin: '35px auto',
//     borderRadius: '2px',
//   },

//   passionPoints: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '20px',
//     marginTop: '35px',
//   },

//   passionItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     color: '#4a5568',
//     fontSize: '0.95rem',
//     fontWeight: '500',
//     padding: '10px',
//     borderRadius: '8px',
//     transition: 'all 0.3s ease',
//   },

//   passionEmoji: {
//     fontSize: '1.3rem',
//   },

//   skillBadges: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '10px',
//     justifyContent: 'center',
//     marginTop: '30px',
//   },

//   skillBadge: {
//     background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
//     color: 'white',
//     padding: '8px 16px',
//     borderRadius: '20px',
//     fontSize: '0.85rem',
//     fontWeight: '600',
//     animation: 'skillBadgeFloat 2s ease-in-out infinite alternate',
//   },
// };

// // Add CSS animations
// const styleSheet = document.createElement('style');
// styleSheet.textContent = `
//   @keyframes titleSlideUp {
//     from { opacity: 0; transform: translateY(40px); }
//     to { opacity: 1; transform: translateY(0); }
//   }

//   @keyframes backgroundFade {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }

//   @keyframes underlineExpand {
//     to { transform: scaleX(1); }
//   }

//   @keyframes slideInLeft {
//     from { opacity: 0; transform: translateX(-50px); }
//     to { opacity: 1; transform: translateX(0); }
//   }

//   @keyframes slideInRight {
//     from { opacity: 0; transform: translateX(50px); }
//     to { opacity: 1; transform: translateX(0); }
//   }

//   @keyframes fadeInUp {
//     to { opacity: 1; transform: translateY(0); }
//   }

//   @keyframes skillBadgeFloat {
//     from { transform: translateY(0px); }
//     to { transform: translateY(-5px); }
//   }
// `;
// document.head.appendChild(styleSheet);

// export default About;















import React, { useEffect, useRef } from "react";
import { FiUserCheck, FiCode, FiAward, FiBriefcase } from "react-icons/fi";

const About = () => {
  const cardRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section style={styles.aboutSection} id="about">
      <div style={styles.aboutWrapper}>
        {/* Header */}
        <div style={styles.heading}>
          <h2 style={styles.title}>About Me</h2>
          <div style={styles.titleBg}>About Me</div>
        </div>

        <div style={styles.aboutContainer}>
          <div style={styles.content}>
            <h3 style={styles.subtitle}>
              <FiUserCheck style={styles.icon} /> Get to Know me!
            </h3>

            {/* Stats Cards */}
            <div style={styles.aboutCards}>
              <div
                ref={el => cardRefs.current[0] = el}
                style={{ ...styles.aboutCard, ...styles.cardHidden }}
              >
                <FiCode style={styles.cardIcon} />
                <h4 style={styles.cardTitle}>Experience</h4>
                <p style={styles.cardText}>1.10+ Years</p>
              </div>
              <div
                ref={el => cardRefs.current[1] = el}
                style={{ ...styles.aboutCard, ...styles.cardHidden }}
              >
                <FiAward style={styles.cardIcon} />
                <h4 style={styles.cardTitle}>Projects</h4>
                <p style={styles.cardText}>15+ Completed</p>
              </div>
              <div
                ref={el => cardRefs.current[2] = el}
                style={{ ...styles.aboutCard, ...styles.cardHidden }}
              >
                <FiBriefcase style={styles.cardIcon} />
                <h4 style={styles.cardTitle}>Current Role</h4>
                <p style={styles.cardText}>mySathi</p>
              </div>
            </div>

            {/* About Text */}
            <div
              ref={textRef}
              style={{ ...styles.textContent, ...styles.textHidden }}
            >
              <p style={styles.mainText}>
                I'm <span style={styles.nameHighlight}>Akash More</span>, a passionate
                <strong style={styles.roleHighlight}> Full Stack Developer</strong> with
                <strong> 1.10+ years</strong> of hands-on experience in building dynamic web and mobile applications.
                I specialize in the <strong style={styles.techHighlight}>MERN Stack</strong> (
                <strong style={styles.techHighlight}>MongoDB</strong>,
                <strong style={styles.techHighlight}> Express.js</strong>,
                <strong style={styles.techHighlight}> ReactJS</strong>,
                <strong style={styles.techHighlight}> Node.js</strong>),
                <strong style={styles.techHighlight}> React Native</strong>, and
                <strong style={styles.techHighlight}> Next.js</strong>.
              </p>

              <p style={styles.secondaryText}>
                Currently contributing as a Full Stack Developer at <strong style={styles.companyHighlight}>mySathi</strong> (June 2024 - Present),
                I focus on creating high-performance, scalable solutions with enhanced user experiences.
                Previously at Mayra Digital Technologies, I delivered projects with <strong>40% performance improvement</strong>
                and mastered end-to-end development, API integration, and UI/UX optimization.
                I'm always excited to collaborate on innovative projects that push the boundaries of
                <span style={styles.highlight}> technology</span> and <span style={styles.highlight}>design</span>.
                Let's turn your ideas into reality! ✨
              </p>

              {/* Skills Tags */}
              <div style={styles.skillsContainer}>
                <h4 style={styles.skillsTitle}>Core Technologies:</h4>
                <div style={styles.skillTags}>
                  <span style={styles.skillTag}>React.js</span>
                  <span style={styles.skillTag}>Node.js</span>
                  <span style={styles.skillTag}>Next.js</span>
                  <span style={styles.skillTag}>React Native</span>
                  <span style={styles.skillTag}>MongoDB</span>
                  <span style={styles.skillTag}>Express.js</span>
                  <span style={styles.skillTag}>JavaScript</span>
                  <span style={styles.skillTag}>TypeScript</span>
                  <span style={styles.skillTag}>WordPress</span>
                  <span style={styles.skillTag}>API Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  aboutSection: {
    backgroundColor: '#f8f9fa',
    padding: '80px 0',
    position: 'relative',
  },

  aboutWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },

  heading: {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
  },

  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#000',
    position: 'relative',
    zIndex: 2,
    animation: 'slideUp 0.8s ease-out',
  },

  titleBg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '6rem',
    fontWeight: '800',
    color: 'rgba(33, 145, 208, 0.05)',
    whiteSpace: 'nowrap',
    zIndex: 1,
  },

  aboutContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  content: {
    maxWidth: '900px',
    width: '100%',
    animation: 'slideUp 0.8s ease-out 0.2s forwards',
    opacity: 0,
  },

  subtitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '1.5rem',
    marginBottom: '40px',
    color: '#000',
    fontWeight: '600',
  },

  icon: {
    color: '#2191d0',
    fontSize: '1.8rem',
  },

  aboutCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },

  aboutCard: {
    background: 'white',
    padding: '30px 20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },

  cardHidden: {
    opacity: 0,
    transform: 'translateY(30px)',
  },

  cardIcon: {
    fontSize: '32px',
    color: '#2191d0',
    marginBottom: '15px',
    transition: 'transform 0.3s ease',
  },

  cardTitle: {
    margin: '15px 0 8px',
    color: '#000',
    fontSize: '1.1rem',
    fontWeight: '600',
  },

  cardText: {
    color: '#666',
    fontSize: '0.95rem',
    fontWeight: '500',
  },

  textContent: {
    transition: 'all 0.8s ease-out',
  },

  textHidden: {
    opacity: 0,
    transform: 'translateY(30px)',
  },

  mainText: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#666',
    marginBottom: '25px',
    textAlign: 'justify',
  },

  secondaryText: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#666',
    marginBottom: '30px',
    textAlign: 'justify',
  },

  nameHighlight: {
    color: '#2191d0',
    fontWeight: '700',
    fontSize: '1.1em',
  },

  roleHighlight: {
    color: '#2191d0',
    fontWeight: '600',
  },

  techHighlight: {
    color: '#2191d0',
    fontWeight: '600',
  },

  companyHighlight: {
    color: '#2191d0',
    fontWeight: '700',
  },

  highlight: {
    color: '#2191d0',
    fontWeight: '600',
  },

  skillsContainer: {
    marginTop: '30px',
  },

  skillsTitle: {
    fontSize: '1.2rem',
    color: '#000',
    marginBottom: '15px',
    fontWeight: '600',
  },

  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '15px',
  },

  skillTag: {
    background: '#2191d0',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
};

// Add CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  [style*="aboutCard"]:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  [style*="aboutCard"]:hover [style*="cardIcon"] {
    transform: scale(1.1);
    color: #1a7bb8;
  }

  [style*="skillTag"]:hover {
    background: #1a7bb8;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    [style*="aboutCards"] {
      grid-template-columns: 1fr !important;
      gap: 15px !important;
    }
    
    [style*="title"] {
      font-size: 2rem !important;
    }
    
    [style*="titleBg"] {
      font-size: 4rem !important;
    }

    [style*="mainText"], [style*="secondaryText"] {
      text-align: left !important;
    }

    [style*="skillTags"] {
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
    [style*="skillTags"] {
      gap: 8px !important;
    }
    
    [style*="skillTag"] {
      font-size: 0.8rem !important;
      padding: 6px 12px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default About;