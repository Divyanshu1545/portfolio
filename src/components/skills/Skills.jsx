import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import "./skills.scss";

// Sample data for skills
const skillsData = [
  {
    id: 1,
    title: "React",
    type: "Frontend",
    prof: 85,
    icon: "/React-icon.svg.png",
  },
  {
    id: 2,
    title: "Flutter",
    type: "Frontend",
    prof: 80,
    icon: "/Flutter_logo.svg",
  },
  {
    id: 3,
    title: "CSS",
    type: "Frontend",
    prof: 70,
    icon: "/64px-CSS3_logo_and_wordmark.png",
  },
  {
    id: 4,
    title: "JavaScript",
    type: "Frontend",
    prof: 90,
    icon: "/javascript.png",
  },
  {
    id: 5,
    title: "HTML",
    type: "Frontend",
    prof: 80,
    icon: "/64px-HTML5_logo_and_wordmark.png",
  },

  {
    id: 6,
    title: "SpringBoot",
    type: "Backend",
    prof: 80,
    icon: "/Spring_Boot.png",
  },
  {
    id: 7,
    title: "MongoDB",
    type: "Backend",
    prof: 65,
    icon: "/Mongodb-icon.svg",
  },
  {
    id: 8,
    title: "MySQL",
    type: "Backend",
    prof: 85,
    icon: "/MySQL-Logo.wine.svg",
  },
  {
    id: 9,
    title: "Java",
    type: "Backend",
    prof: 90,
    icon: "/java.svg",
  },
];
const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  initialLeft: {
    opacity: 0,
    x: -150,
  },
  animate: {
    opacity: 1,
    y: 0,
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
      <motion.div variants={variants} className="skill-header">
        <motion.img
          variants={variants}
          src={item.icon}
          alt={`${item.title} icon`}
          className="skill-icon"
        />
        <motion.h2 variants={variants}>{item.title}</motion.h2>
      </motion.div>
      <motion.div variants={variants} className="proficiency">
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
  const [activeTab, setActiveTab] = useState("Backend");

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
          className={activeTab === "Frontend" ? "active" : ""}
          onClick={() => handleTabChange("Frontend")}
        ></motion.button>
        <motion.button
          initial="initial"
          whileInView="animate"
          className={activeTab === "Backend" ? "active" : ""}
          onClick={() => handleTabChange("Backend")}
        ></motion.button>
        <motion.button
          initial="initial"
          whileInView="animate"
          className={activeTab === "Other" ? "active" : ""}
          onClick={() => handleTabChange("Other")}
        ></motion.button>
      </motion.div>
      <motion.div initial="initial" whileInView="animate" className="wrapper">
        <motion.div
          initial="initialLeft"
          whileInView="animate"
          className="titleContainer"
        >
          <motion.h2
            key={activeTab}
            initial={{ opacity: 0, y: 50,scale:0.9 }}
            animate={{ opacity: 1, y: 0, scale:1 }}
            transition={{ duration: 0.5 }}
            whileInView="animate"
          >
            {activeTab} Skills
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
