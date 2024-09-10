import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
4;
import emailJs from "@emailjs/browser";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(typeof formRef.current);
    emailJs
      .sendForm(
        "service_a6i90ug",
        "template_bake3e7",
        formRef.current,
        "eYOie_4x4oB-ZmLNX"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="contact"
    >
      <motion.div variants={variants} className="textContainer">
        <motion.h1 variants={variants}>Have any queries</motion.h1>
        <motion.div variants={variants} className="item">
          <motion.h2 variants={variants}>Email</motion.h2>
          <motion.span variants={variants}>
            daroliadivyanshu45@gmail.com
          </motion.span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <motion.h2 variants={variants}>Phone</motion.h2>
          <motion.span variants={variants}>+91 97286-38388</motion.span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <motion.h2 variants={variants}>Address</motion.h2>
          <motion.span variants={variants}>Rohtak, Haryana</motion.span>
        </motion.div>
      </motion.div>
      <motion.div variants={variants} className="formContainer">
        <motion.form ref={formRef} onSubmit={sendEmail}>
          <motion.input
            type="text"
            variants={variants}
            placeholder="Name"
            name="name"
            required
          />
          <motion.input
            type="email"
            variants={variants}
            placeholder="Email"
            name="email"
            required
          />
          <motion.textarea
            rows={8}
            variants={variants}
            placeholder="Message"
            name="message"
            required
          />
          <motion.button value="send" variants={variants} type="submit">
            Submit
          </motion.button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
