import { motion } from "framer-motion";
import React from "react";

const Button = ({ children, onClick, className, disabled }) => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  };

  const rippleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 0.2,
      scale: 1.5,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.button
      whileHover={!disabled ? "hover" : ""}
      whileTap={!disabled ? "tap" : ""}
      className={`bg-gradient-to-r from-ffc55a to-fc4100 text-white font-bold py-2 px-4 rounded-full ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <motion.span
        className="absolute inset-0 rounded-full"
        initial="initial"
        animate={!disabled ? "animate" : ""}
        exit="exit"
        variants={rippleVariants}
      />
    </motion.button>
  );
};

export default Button;
