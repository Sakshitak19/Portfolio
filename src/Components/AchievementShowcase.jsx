import video from "../assets/video.mp4";
import { ACHIEVEMENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, // Fixed typo from "opasity"
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3, // Reduced stagger for better flow
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    }
  }
};

const AchievementShowcase = () => {
  return (
    <motion.section 
      id="award"
      className="bg-black py-20 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-4xl font-bold"
      >
        Achievement
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto flex max-w-6xl flex-col items-center md:flex-row"
      >
        <motion.div
          variants={itemVariants}
          className="w-full p-4 md:w-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-xl shadow-2xl"
          >
            <video 
              className="w-full" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants} // Fixed typo from "varients"
          className="flex w-full flex-col justify-center p-6 md:w-1/2"
        >
          <motion.h2 
            whileHover={{ x: 5 }}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            {ACHIEVEMENT.title}
          </motion.h2>
          
          <motion.span
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block border-b-2 border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400"
          >
            {ACHIEVEMENT.award}
          </motion.span>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg leading-relaxed"
          >
            {ACHIEVEMENT.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AchievementShowcase;