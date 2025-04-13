import { PROFILE } from "../constants";
import profilePic from "../assets/sakshi.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  const nameLetters = PROFILE.name.split("");

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto flex flex-col-reverse items-center px-6 py-16 md:flex-row md:gap-12">
        {/* Text Section - Left Side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="w-full md:w-1/2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-2xl text-yellow-400 md:text-3xl"
          >
            Namaste, I am
          </motion.p>

          <motion.h1 className="mb-8 text-5xl font-bold md:text-7xl">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block hover:text-yellow-400"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Professional Description */}
          <motion.p
            className="mb-10 text-xl leading-relaxed text-gray-300 md:text-2xl md:leading-loose"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            As a{" "}
            <span className="text-yellow-400 font-medium">
              Full-Stack Developer
            </span>{" "}
            and{" "}
            <span className="text-yellow-400 font-medium">
              UI/UX Designer
            </span>
            , I architect digital experiences that blend form and function. My
            expertise spans responsive web design, interactive frontends, and
            scalable backends. Through my technical blog, I share insights on
            modern development practices while mentoring the next generation of
            creators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="/Sakshi Tak New Resume2.pdf"
              download="Sakshi_Tak_Resume.pdf"
              className="inline-block rounded-lg bg-yellow-400 px-10 py-4 text-lg font-semibold text-black shadow-lg md:text-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 20px rgba(234, 179, 8, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              My Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Section - Right Side with 3D Animation & Hover Color */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{
            opacity: 1,
            x: 0,
            rotateY: 0,
            filter: "brightness(0.95) contrast(1.05)"
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mb-12 w-full md:mb-0 md:w-1/2 perspective-1000"
        >
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-2xl transform-style-preserve-3d"
            animate={{
              rotateY: [0, 10, -10, 0],
              rotateX: [0, 5, -5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.4 }
            }}
          >
            <motion.img
              src={profilePic}
              alt={PROFILE.name}
              className="h-auto w-full object-cover brightness-90 contrast-110 transition-all duration-500"
              whileHover={{
                filter: "brightness(0.8) contrast(1.1)",
                transition: { duration: 0.3 }
              }}
            />

            {/* Dark blue hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-blue-900 mix-blend-multiply pointer-events-none"
            />

            {/* 3D Edge Effect */}
            <motion.div
              className="absolute inset-0 border-2 border-yellow-400/30 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{
                borderWidth: "4px",
                borderColor: "rgba(234, 179, 8, 0.5)",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
