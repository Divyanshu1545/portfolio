import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Cafeteria Automation",
    image:
      "https://images.pexels.com/photos/5710456/pexels-photo-5710456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Aute nostrud dolor consectetur aliquip.Aute nostrud dolor consectetur aliquip.Aute nostrud dolor consectetur aliquip.",
  },
  {
    id: 2,
    title: "Blog API",
    image:
      "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Aute nostrud dolor consectetur aliquip.Aute nostrud dolor consectetur aliquip.Aute nostrud dolor consectetur aliquip.",
  },
  {
    id: 3,
    title: "Park Spotter",
    image:
      "https://images.pexels.com/photos/5331969/pexels-photo-5331969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Aute nostrud dolor consectetur aliquip.Aute nostrud dolor consectetur aliquip.Aute nostrud dolor consectetur aliquip.",
  },
  {
    id: 4,
    title: "Custom Notes App",
    image:
      "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Aute nostrud dolor consectetur aliquip.Aute nostrud dolor consectetur aliquip.Aute nostrud dolor consectetur aliquip.",
  },
];
const Single = ({ item }) => {
  const variants = {
    // initial: {
    //   opacity: 0.0,
    //   x: -500,
    // },
    // animate: {
    //   opacity: 1,
    //   x: 0,
    //   transition:{
    //     duration:2
    //   }
    // },
  };
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <motion.div ref={ref} initial='initial' whileInView='animate' variants={variants} className="container">
        <motion.div className="wrapper">
          <motion.div className="imageContainer">
            <img src={item.image} />
          </motion.div>
          <motion.div style={{ y }} className="textContainer">
            <motion.h2>{item.title}</motion.h2>
            <motion.p>{item.desc}</motion.p>
            <motion.button>See Demo</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 10,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Previous Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
