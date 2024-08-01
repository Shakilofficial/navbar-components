import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const rippleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 0.2, scale: 1.5 },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      className="relative" // Ensure relative positioning for ripple
    >
      <Link
        to="/login"
        className="px-5 py-2 rounded-md bg-gradient-to-b from-[#ffc55a] to-[#fc4100] text-white font-bold focus:ring-2 focus:ring-rose-400 focus:ring-opacity-90"
      >
        Login
        <motion.span
          className="absolute inset-0 rounded-full"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={rippleVariants}
        />
      </Link>
    </motion.div>
  );
};

export default LoginButton;
