import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const rippleEffect = {
  initial: { scale: 0, opacity: 1 },
  animate: { scale: 4, opacity: 0 },
  transition: { duration: 0.6 },
};

const Button = ({ children, to }) => {
  const [rippleArray, setRippleArray] = React.useState([]);

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.clientX - rippleContainer.left - size / 2;
    const y = event.clientY - rippleContainer.top - size / 2;
    const newRipple = { x, y, size };

    setRippleArray([...rippleArray, newRipple]);

    setTimeout(() => {
      setRippleArray(rippleArray.slice(1));
    }, 600);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-lg"
    >
      <Link
        to={to}
        onMouseDown={addRipple}
        className="relative flex items-center justify-center px-5 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
      >
        {rippleArray.map((ripple, index) => (
          <motion.span
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
            initial="initial"
            animate="animate"
            variants={rippleEffect}
          />
        ))}
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;
