import { motion } from "framer-motion";
import { useContext } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-gray-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? (
        <MdOutlineLightMode className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MdOutlineDarkMode className="h-5 w-5" aria-hidden="true" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
