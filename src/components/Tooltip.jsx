import { useState } from "react";
import { motion } from "framer-motion";

const Tooltip = ({ children, text, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: position === "top" ? -10 : 10 },
    visible: { opacity: 1, y: 0 },
  };

  const getPositionClass = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default:
        return "";
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {isVisible && (
        <motion.div
          className={`absolute z-10 px-3 py-1 bg-gray-800 text-white text-xs rounded ${getPositionClass()}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={tooltipVariants}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
