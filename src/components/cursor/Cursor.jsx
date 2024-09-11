import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";
function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  });

  return (
    <motion.div
      animate={{
        x: position.x + 10,
        y: position.y + 10,
        transition: { duration: 0.2 },
      }}
      className="cursor"
    ></motion.div>
  );
}

export default Cursor;
