import { motion } from "framer-motion";
import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 text-white">
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-purple-500 blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500 blur-3xl"
      />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-bold"
        >
          My <span className="text-yellow-400">Journey</span>
        </motion.h2>

        <div className="relative mx-auto max-w-6xl px-4">
          {/* Animated center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-yellow-400 via-gray-600 to-gray-600"
          />

          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px 0px" }}
              className="relative mb-16 w-full"
            >
              {/* Animated dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 500
                }}
                className="absolute left-1/2 top-6 h-5 w-5 -translate-x-1/2 transform rounded-full bg-yellow-400 shadow-lg"
              />

              {/* Enhanced box with glow effect */}
              <motion.div
                className={`relative mx-auto w-full max-w-2xl rounded-xl bg-gray-800 p-8 shadow-lg md:w-7/12 
                  ${index % 2 === 0 ? 'md:left-1/2 md:ml-8' : 'md:right-1/2 md:mr-8'}`}
              >
                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  className={`absolute inset-0 rounded-xl bg-yellow-400 ${
                    index % 2 === 0 ? '-left-1' : '-right-1'
                  }`}
                />
                
                <h3 className="text-2xl font-bold text-yellow-400">{item.name}</h3>
                <p className="mb-4 text-lg text-gray-400">{item.title}</p>
                <p className="text-lg leading-relaxed text-gray-300">{item.quote}</p>
                
                {/* Animated arrow */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className={`absolute top-6 hidden h-3 w-3 rotate-45 bg-gray-800 md:block ${
                    index % 2 === 0 ? '-left-1.5' : '-right-1.5'
                  }`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;