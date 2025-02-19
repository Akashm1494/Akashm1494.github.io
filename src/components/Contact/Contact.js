import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CiMapPin, CiPhone, CiMail } from "react-icons/ci";
import styles from "./Contact.module.css";

const Result = () => <p>Your response has been submitted.</p>;

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
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.heading}>
        <h2 className={styles.title}>Contact Me</h2>
      </div>
      <div className={styles.container}>
        <motion.div 
          className={styles.left} 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.contactForm}>
            <form method="POST" name="contactForm" onSubmit={sendEmail}>
              {["from_name", "email_id", "message"].map((field, index) => (
                <motion.div 
                  key={field}
                  className={styles.formControl}
                  whileFocus={{ scale: 1.05 }}
                >
                  {field === "message" ? (
                    <textarea 
                      name={field} 
                      rows="8" 
                      placeholder="Message"
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      className={focused === field ? styles.focused : ""}
                      required
                    />
                  ) : (
                    <input
                      name={field}
                      type={field === "email_id" ? "email" : "text"}
                      placeholder={field === "from_name" ? "Name" : "Email"}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      className={focused === field ? styles.focused : ""}
                      required
                    />
                  )}
                </motion.div>
              ))}

              <motion.input
                className={styles.submitBtn}
                type="submit"
                value="Submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              />
              <div>{result && <Result />}</div>
            </form>
          </div>
        </motion.div>

        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.contactInfo}>
            {[{ icon: <CiMapPin />, title: "Address", body: "Pune, India" },
              { icon: <CiMail />, title: "Email", body: "akashmore2ksdsa@gmail.com" },
              { icon: <CiPhone />, title: "Contact No.", body: "+91 7741919219" }]
              .map((info, index) => (
                <motion.div 
                  key={index} 
                  className={styles.contactInfoItem}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.icon}>{info.icon}</div>
                  <div className={styles.content}>
                    <h4 className={styles.infoTitle}>{info.title}</h4>
                    <p className={styles.infoBody}>{info.body}</p>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
