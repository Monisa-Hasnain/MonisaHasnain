import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export const FloatingContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
    >
      <motion.a
        href="https://www.linkedin.com/in/monisa-hasnain/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="bg-teal text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="h-6 w-6" />
      </motion.a>

      <motion.a
        href="https://github.com/Monisa-Hasnain"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        className="bg-steel text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="GitHub Profile"
      >
        <Github className="h-6 w-6" />
      </motion.a>
    </motion.div>
  );
};
