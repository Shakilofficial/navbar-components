import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <FiX className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <FiMenu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-l-lg z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Menu
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="py-4 px-4">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
