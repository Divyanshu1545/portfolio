import "./services.scss";
import React from "react";
import { motion } from "framer-motion";
const variants = {
  initial: { x: -500, opacity: 0, y: 100 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

function Services() {
  return (
    <motion.div className="services" variants={variants} initial='initial' whileInView='animate'>
      <motion.div className="textContainer" variants={variants}>
        <motion.p>Your guy in the chair.</motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./../../../public/people.webp" />
          <h1>
            <b>Innovating</b> Yourmotion.
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Digital</b> Journey
          </h1>
          <button>What we do</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Non elit duis elit aliqua eiusmod consectetur consectetur aliqua
            pariatur. consectetur consectetur aliqua pariatur.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Non elit duis elit aliqua eiusmod consectetur consectetur aliqua
            pariatur. consectetur consectetur aliqua pariatur.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Non elit duis elit aliqua eiusmod consectetur consectetur aliqua
            pariatur. consectetur consectetur aliqua pariatur.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Non elit duis elit aliqua eiusmod consectetur consectetur aliqua
            pariatur. consectetur consectetur aliqua pariatur.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
