import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "underline text-gray-900 dark:text-white"
          : "text-gray-700 dark:text-gray-300 hover:underline"
      }
    >
      {label}
    </NavLink>
  </motion.div>
);

export default NavItem;
