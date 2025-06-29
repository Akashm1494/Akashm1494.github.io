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
          {/* <div style={styles.titleBg}>About Me</div> */}
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
                className="hover-card"
              >
                <FiCode style={styles.cardIcon} className="card-icon" />
                <h4 style={styles.cardTitle}>Experience</h4>
                <p style={styles.cardText}>2+ Years</p>
              </div>
              <div
                ref={el => cardRefs.current[1] = el}
                style={{ ...styles.aboutCard, ...styles.cardHidden }}
                className="hover-card"
              >
                <FiAward style={styles.cardIcon} className="card-icon" />
                <h4 style={styles.cardTitle}>Projects</h4>
                <p style={styles.cardText}>11+ Completed</p>
              </div>
              <div
                ref={el => cardRefs.current[2] = el}
                style={{ ...styles.aboutCard, ...styles.cardHidden }}
                className="hover-card"
              >
                <FiBriefcase style={styles.cardIcon} className="card-icon" />
                <h4 style={styles.cardTitle}>Current Role</h4>
                <p style={styles.cardText}>Full Stack Developer</p>
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
                <strong> 2+ years</strong> of hands-on experience in building dynamic web and mobile applications.
                I specialize in the <strong style={styles.techHighlight}>MERN Stack</strong> (
                <strong style={styles.techHighlight}>MongoDB</strong>,
                <strong style={styles.techHighlight}> Express.js</strong>,
                <strong style={styles.techHighlight}> ReactJS</strong>,
                <strong style={styles.techHighlight}> Node.js</strong>),
                <strong style={styles.techHighlight}> React Native</strong>, and
                <strong style={styles.techHighlight}> Next.js</strong>.
              </p>

              <p style={styles.secondaryText}>
                Currently contributing as a Full Stack Developer at <strong style={styles.companyHighlight}>MySathi</strong> (June 2025 - Present),
                a product-based company where I focus on creating innovative, scalable solutions with enhanced user experiences.
                Previously at Mayara Digital Technologies (September 2023 - June 2025), I delivered projects with <strong>40% performance improvement</strong>
                and mastered end-to-end development, API integration, and UI/UX optimization.
                I'm always excited to collaborate on innovative projects that push the boundaries of
                <span style={styles.highlight}> technology</span> and <span style={styles.highlight}>design</span>.
                Let's turn your ideas into reality! ✨
              </p>

              {/* Skills Tags */}
              <div style={styles.skillsContainer}>
                <h4 style={styles.skillsTitle}>Core Technologies:</h4>
                <div style={styles.skillTags}>
                  <span style={styles.skillTag} className="skill-tag">ReactJS</span>
                  <span style={styles.skillTag} className="skill-tag">Next.js</span>
                  <span style={styles.skillTag} className="skill-tag">Angular</span>
                  <span style={styles.skillTag} className="skill-tag">Vue.js</span>
                  <span style={styles.skillTag} className="skill-tag">Node.js</span>
                  <span style={styles.skillTag} className="skill-tag">Express.js</span>
                  <span style={styles.skillTag} className="skill-tag">React Native</span>
                  <span style={styles.skillTag} className="skill-tag">TypeScript</span>
                  <span style={styles.skillTag} className="skill-tag">JavaScript (ES6+)</span>
                  <span style={styles.skillTag} className="skill-tag">MongoDB</span>
                  <span style={styles.skillTag} className="skill-tag">MySQL</span>
                  <span style={styles.skillTag} className="skill-tag">Firebase</span>
                  <span style={styles.skillTag} className="skill-tag">WordPress</span>
                  <span style={styles.skillTag} className="skill-tag">REST APIs</span>
                  <span style={styles.skillTag} className="skill-tag">Git & GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hover-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          border: 2px solid transparent;
        }

        .hover-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(33, 145, 208, 0.2);
          border-color: rgba(33, 145, 208, 0.3);
          background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
        }

        .card-icon {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .hover-card:hover .card-icon {
          transform: scale(1.2) rotate(5deg);
          color: #1a7bb8;
          filter: drop-shadow(0 4px 8px rgba(33, 145, 208, 0.3));
        }

        .skill-tag {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .skill-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .skill-tag:hover {
          background: linear-gradient(135deg, #1a7bb8 0%, #2191d0 100%);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(33, 145, 208, 0.4);
        }

        .skill-tag:hover::before {
          left: 100%;
        }

        @media (max-width: 768px) {
          .hover-card:hover {
            transform: translateY(-5px) scale(1.01);
          }
          
          .skill-tag:hover {
            transform: translateY(-2px) scale(1.02);
          }
        }

        @media (max-width: 576px) {
          .hover-card:hover {
            transform: translateY(-3px);
          }
        }
      `}</style>
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
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },

  cardHidden: {
    opacity: 0,
    transform: 'translateY(30px)',
  },

  cardIcon: {
    fontSize: '32px',
    color: '#2191d0',
    marginBottom: '15px',
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
    gap: '12px',
    marginTop: '15px',
    justifyContent: 'center',
  },

  skillTag: {
    // background: '#2191d0',
    background: 'linear-gradient(45deg, var(--primary-color, #2191d0), var(--secondary-color, #00d0d2))',
    color: 'white',
    padding: '10px 18px',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
  },
};

export default About;