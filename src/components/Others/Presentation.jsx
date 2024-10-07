import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../Translate/LanguageContext";
import Translations from "../Translate/Translations";
import Photo from "../../assets/yann.jpg";

const Presentation = () => {
  const { language } = useLanguage(); // Récupère la langue actuelle

  return (
    <div className="w-full min-h-[50vh] flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 ">
      <div className="max-w-3xl flex flex-col items-start justify-center space-y-4 px-4 md:px-8 backdrop-blur-md">
        <AnimatedText
          className="text-start text-3xl md:text-4xl font-bold text-gray-700 dark:text-green-500"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {Translations[language].greeting}
        </AnimatedText>

        <AnimatedText
          className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl text-start leading-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {Translations[language].description}
        </AnimatedText>
      </div>
      {/* Animation de l'image */}
      <AnimatedImage
        src={Photo}
        alt="Photo de Yann"
        className="w-50 h-64 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
};

// Component for animated text
const AnimatedText = ({ className, initial, animate, transition, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

// Component for animated image
const AnimatedImage = ({ src, alt, className, initial, animate, transition }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center"
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
    >
      <motion.img
        src={src}
        alt={alt}
        className={className}
      />
    </motion.div>
  );
};

export default Presentation;
