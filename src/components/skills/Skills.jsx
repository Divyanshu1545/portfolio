import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import "./skills.scss";

// Sample data for skills
const skillsData = [
  {
    id: 1,
    title: "React",
    type: "frontend",
    prof: 85,
    icon: "/React-icon.svg.png",
  },
  {
    id: 2,
    title: "Flutter",
    type: "frontend",
    prof: 80,
    icon: "/Flutter_logo.svg",
  },
  {
    id: 3,
    title: "CSS",
    type: "frontend",
    prof: 70,
    icon: "/64px-CSS3_logo_and_wordmark.png",
  },
  {
    id: 4,
    title: "JavaScript",
    type: "frontend",
    prof: 90,
    icon: "/javascript.png",
  },
  {
    id: 5,
    title: "HTML",
    type: "frontend",
    prof: 80,
    icon: "/64px-HTML5_logo_and_wordmark.png",
  },

  {
    id: 6,
    title: "SpringBoot",
    type: "backend",
    prof: 80,
    icon: "/Spring_Boot.png",
  },
  {
    id: 7,
    title: "MongoDB",
    type: "backend",
    prof: 65,
    icon: "/Mongodb-icon.svg",
  },
  {
    id: 8,
    title: "MySQL",
    type: "backend",
    prof: 85,
    icon: "/MySQL-Logo.wine.svg",
  },
  {
    id: 9,
    title: "Java",
    type: "backend",
    prof: 90,
    icon: "/java.svg",
  },
];
const variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  initialLeft: {
    opacity: 0,
    x: -150,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
function SingleSkill({ item }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="skill"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        className="skill-header"
      >
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="skill-icon"
        />
        <motion.h2 initial="initial" whileInView="animate">
          {item.title}
        </motion.h2>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        className="proficiency"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          className="progress-bar"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            className="progress-fill"
            style={{ width: `${item.prof}%` }}
          ></motion.div>
        </motion.div>
        <motion.span
          initial="initial"
          whileInView="animate"
          className="prof-text"
        >
          {item.prof}%
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState("backend");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div
      variants={variants}
      initial="initialLeft"
      whileInView="animate"
      className="skillsPage"
    >
      <motion.div className="tabs">
        <motion.button
          className={activeTab === "frontend" ? "active" : ""}
          onClick={() => handleTabChange("frontend")}
        ></motion.button>
        <motion.button
          initial="initial"
          whileInView="animate"
          className={activeTab === "backend" ? "active" : ""}
          onClick={() => handleTabChange("backend")}
        ></motion.button>
        <motion.button
          initial="initial"
          whileInView="animate"
          className={activeTab === "others" ? "active" : ""}
          onClick={() => handleTabChange("others")}
        ></motion.button>
      </motion.div>
      <motion.div initial="initial" whileInView="animate" className="wrapper">
        <motion.div
          initial="initialLeft"
          whileInView="animate"
          className="titleContainer"
        >
          <motion.h2 initial="initialLeft" whileInView="animate">
            Technical Skills
          </motion.h2>
        </motion.div>
        <motion.div initial="initial" whileInView="animate" className="skills">
          <div className="skillsContainer">
            {skillsData.map((item) => {
              if (item.type === activeTab)
                return <SingleSkill item={item} key={item.id} />;
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
