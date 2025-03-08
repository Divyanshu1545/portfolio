import React from "react";
import "./navbar.scss";
import fb from "./../../../public/facebook.png";
import ig from "./../../../public/instagram.png";
import git from "./../../../public/Github_logo_svg.webp";
import li from "./../../../public/LinkedIn_logo_initials.webp";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
function Navbar() {
  return (
    <div className="navbar">
    <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration:0.5}}
        >
          Divyanshu
        </motion.span>
        <div className="socials">
          <a href="">
            <img src={fb} />
          </a>
          <a href="">
            <img src={li} />
          </a>
          <a href="">
            <img src={ig} />
          </a>
          <a href="">
            <img src={git} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
