import React from "react";
import Tilt from "react-parallax-tilt"; // Updated library
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-[#151253] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title.toLowerCase()}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have been working as a Software Developer proficient in TypeScript, JavaScript, PHP, and Python. I use well-known frameworks such as React, Node.js, Vue, Next.js, Laravel, FastAPI, and Three.js.
        I have experience working with databases (MySQL, SQL, MongoDB), message brokers (RabbitMQ), and monitoring tools (Grafana). I’m also experienced in CI/CD pipelines with GitHub Actions and Terraform, and containerization tools like Docker and Kubernetes. I can deploy applications on AWS services like S3 and EC2.
        I’m comfortable working in Ubuntu/Linux environments and skilled at preparing precise API documentation and system architecture diagrams.
        As a fast learner and team player, my passion lies in building efficient, scalable, and user-friendly software solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
