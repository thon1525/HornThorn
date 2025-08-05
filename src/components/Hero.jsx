import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { memo } from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Thorn</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop front-end and <br className="sm:block hidden" />
            back-end web applications and create RESTful APIs
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
              <motion.a
      href="/thonhourn.pdf"
      download="thonhourn.pdf"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-[160px] h-[48px] bg-secondary text-white font-medium rounded-xl flex justify-center items-center shadow-md hover:bg-secondary/80 transition duration-300"
    >
      Download CV
    </motion.a>
      </div>
    </section>
  );
};

export default memo(Hero); // Memoize to prevent unnecessary re-renders