import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mb-8 mt-20 text-white">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Sakshi Tak
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto mb-10 h-1 w-20 bg-yellow-400"
          />
        </motion.div>
      </div>

      <motion.div 
        className="flex items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a 
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ 
              y: -5,
              color: "#facc15", // yellow-400
              scale: 1.2
            }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.1,
              hover: { type: "spring" }
            }}
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-white"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      
    </div>
  )
}

export default Footer;