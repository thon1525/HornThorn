import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: window.innerWidth < 640 ? 0.05 : 0.1 }} // Lower trigger for mobile
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 w-full min-h-[200px]`} // Added min-h
      >
        <span className="hash-span" id={idName} aria-hidden="true">
           
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;