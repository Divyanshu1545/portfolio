import React from "react";
import "./hero.scss";
import hero from "/Hero-transformed_upscaled.png";
import scroll from "/scroll.png";
import { animate, motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0.2,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-250%",

    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          initial="initial"
          animate="animate"
          className="textContainer"
          variants={textVariants}
        >
          <motion.h2 variants={textVariants}>DIVYANSHU DAROLIA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer and Android Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button  whileTap={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }} variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Developer Tech Enthusiast Weeb
      </motion.div>
      <div className="imageContainer">
        <img src={hero} />
      </div>
    </div>
  );
}

export default Hero;
