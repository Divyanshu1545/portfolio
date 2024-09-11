import "./services.scss";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: { x: 0, opacity: 0, y: 100 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};
const items = [
  {
    id: 1,
    title: "Backend Development",
    desc: " Using Java Spring Boot to build back-end systems, including REST APIs and microservices. It simplifies complex backend tasks with minimal configuration.",
  },
  {
    id: 2,
    title: "Mobile Applications",
    desc: "  Developing cross-platform mobile apps using Flutter for Android and iOS. Flutter offers fast development with a single codebase.",
  },
  {
    id: 3,
    title: "Frontend Development",
    desc: "  Building responsive user interfaces with React for web applications. React allows for efficient updates and a smooth UX for the user",
  },
  {
    id: 4,
    title: "Fullstack Development",
    desc: "  Combining React and Spring Boot to deliver full stack applications. This enables seamless integration between front-end and back-end technologies.",
  },
];
function ServiceItem({ item }) {
  return (
    <motion.div
      className="box"
      whileHover={{ backgroundColor: "lightgray", color: "black",transition:{duration:0.3} }}
    >
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
    </motion.div>
  );
}
function Services() {
  const servicesRef = useRef();
  const isInView = useInView(servicesRef, { margin: "-200px" });
  return (
    <motion.div
      ref={servicesRef}
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.p>Your guy in the chair.</motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.img src="./../../../public/wp1951680.webp" />
          <h1>
            <b>Innovating</b> Your
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Digital</b> Journey
          </h1>
          <button>What I do</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {items.map((item) => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
