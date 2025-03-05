import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { CiMapPin, CiPhone, CiMail } from "react-icons/ci";
import styles from "./Contact.module.css";

const Result = () => <p className={styles.successMessage}>Your message has been sent successfully!</p>;

function Contact() {
  const [result, setResult] = useState(false);
  const [focused, setFocused] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ty7wap8",
        "template_rc0b0za",
        e.target,
        "dgcTS7d4NLQPMhPYe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResult(true);
          e.target.reset();
          setTimeout(() => setResult(false), 5000);
        },
        (error) => console.log(error.text)
      );
  };

  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.heading}>
        <h2 className={`${styles.title} ${styles.animateTitle}`}>Contact Me</h2>
      </div>
      <div className={styles.container}>
        <div className={`${styles.left} ${styles.animateLeft}`}>
          <div className={styles.contactForm}>
            <form method="POST" name="contactForm" onSubmit={sendEmail}>
              <div className={`${styles.formControl} ${styles.animateItem}`} style={{ animationDelay: "0.1s" }}>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Name"
                  onFocus={() => setFocused("from_name")}
                  onBlur={() => setFocused(null)}
                  className={focused === "from_name" ? styles.focused : ""}
                  required
                />
              </div>
              
              <div className={`${styles.formControl} ${styles.animateItem}`} style={{ animationDelay: "0.2s" }}>
                <input
                  name="email_id"
                  type="email"
                  placeholder="Email"
                  onFocus={() => setFocused("email_id")}
                  onBlur={() => setFocused(null)}
                  className={focused === "email_id" ? styles.focused : ""}
                  required
                />
              </div>
              
              <div className={`${styles.formControl} ${styles.animateItem}`} style={{ animationDelay: "0.3s" }}>
                <textarea 
                  name="message" 
                  rows="8" 
                  placeholder="Message"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={focused === "message" ? styles.focused : ""}
                  required
                />
              </div>

              <div className={`${styles.animateItem}`} style={{ animationDelay: "0.4s" }}>
                <input
                  className={styles.submitBtn}
                  type="submit"
                  value="Send Message"
                />
              </div>
              
              <div className={styles.resultContainer}>
                {result && <Result />}
              </div>
            </form>
          </div>
        </div>

        <div className={`${styles.right} ${styles.animateRight}`}>
          <div className={styles.contactInfo}>
            <div className={`${styles.contactInfoItem} ${styles.animateItem}`} style={{ animationDelay: "0.3s" }}>
              <div className={styles.icon}><CiMapPin /></div>
              <div className={styles.content}>
                <h4 className={styles.infoTitle}>Address</h4>
                <p className={styles.infoBody}>Pune, India</p>
              </div>
            </div>
            
            <div className={`${styles.contactInfoItem} ${styles.animateItem}`} style={{ animationDelay: "0.4s" }}>
              <div className={styles.icon}><CiMail /></div>
              <div className={styles.content}>
                <h4 className={styles.infoTitle}>Email</h4>
                <p className={styles.infoBody}>more.akash0797@gmail.com</p>
              </div>
            </div>
            
            <div className={`${styles.contactInfoItem} ${styles.animateItem}`} style={{ animationDelay: "0.5s" }}>
              <div className={styles.icon}><CiPhone /></div>
              <div className={styles.content}>
                <h4 className={styles.infoTitle}>Contact No.</h4>
                <p className={styles.infoBody}>+91 7741919219</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;