import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const hoverEffect = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.3)",
  transition: { type: "spring", stiffness: 300 },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-30px" }}
      className="relative bg-black py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          variants={itemVariants}
          className="mb-16 text-center text-4xl font-bold"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={hoverEffect}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer rounded-xl relative block"
            >
              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-xl bg-yellow-400 opacity-0 blur-md z-0"
              />

              {/* Card Content */}
              <div className="relative z-10">
                <Card
                  image={project.image}
                  title={project.title}
                  subtitle={project.subtitle}
                />
              </div>

              {/* Underline */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 h-0.5 bg-yellow-400"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
