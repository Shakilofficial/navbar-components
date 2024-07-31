import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link
        to="/login"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Login
      </Link>
    </motion.div>
  );
};

export default LoginButton;
