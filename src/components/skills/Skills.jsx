import React, { useState } from "react";
import { motion } from "framer-motion";
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
    prof: 70,
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
    prof: 70,
    icon: "/javascript.png",
  },
  {
    id: 5,
    title: "HTML",
    type: "frontend",
    prof: 70,
    icon: "/64px-HTML5_logo_and_wordmark.png",
  },

  {
    id: 6,
    title: "SpringBoot",
    type: "backend",
    prof: 75,
    icon: "/Spring_Boot.png",
  },
  {
    id: 7,
    title: "MongoDB",
    type: "backend",
    prof: 60,
    icon: "/Mongodb-icon.svg",
  },
  {
    id: 8,
    title: "MySQL",
    type: "backend",
    prof: 60,
    icon: "/MySQL-Logo.wine.svg",
  },
  {
    id: 9,
    title: "Java",
    type: "backend",
    prof: 60,
    icon: "/java.svg",
  },
];

function SingleSkill({ item }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="skill-icon"
        />
        <motion.h2>{item.title}</motion.h2>
      </div>
      <motion.div className="proficiency">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${item.prof}%` }}
          ></div>
        </div>
        <span className="prof-text">{item.prof}%</span>
      </motion.div>
    </div>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div className="skillsPage">
      <motion.div className="wrapper">
        <div className="imageContainer">
          <h2>Technical Skills</h2>
        </div>
        <div className="skills">
          <div className="tabs">
            <button
              className={activeTab === "frontend" ? "active" : ""}
              onClick={() => handleTabChange("frontend")}
            >
              Front End
            </button>
            <button
              className={activeTab === "backend" ? "active" : ""}
              onClick={() => handleTabChange("backend")}
            >
              Back End
            </button>
            <button
              className={activeTab === "others" ? "active" : ""}
              onClick={() => handleTabChange("others")}
            >
              Others
            </button>
          </div>
          <div className="skillsContainer">
            {skillsData.map((item) => {
              if (item.type === activeTab)
                return <SingleSkill item={item} key={item.id} />;
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
