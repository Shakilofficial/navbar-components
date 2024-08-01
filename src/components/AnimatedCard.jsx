import { motion } from "framer-motion";

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-white"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
