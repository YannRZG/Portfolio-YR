import { motion } from "framer-motion";
import { useLanguage } from "./Translate/LanguageContext";
import Translations from "./Translate/Translations";

const Presentation = () => {
  const { language } = useLanguage(); // Récupère la langue actuelle

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
      <div className="min-h-[500px] max-w-3xl flex flex-col items-start justify-center space-y-4 px-4 md:px-8">
        <motion.h1
          className="text-start text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, x: -100 }} // Part de la gauche
          animate={{ opacity: 1, x: 0 }} // Arrive à sa position initiale
          transition={{ duration: 1.5 }} // Durée de l'animation
        >
          {Translations[language].greeting}
        </motion.h1>

        <motion.h3
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl text-start leading-8"
          initial={{ opacity: 0, x: 100 }} // Part de la droite
          animate={{ opacity: 1, x: 0 }} // Arrive à sa position initiale
          transition={{ duration: 1.5 }} // Durée de l'animation
        >
          {Translations[language].description}
        </motion.h3>
      </div>
      {/* Animation de l'image */}
      <motion.div 
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }} // L'image apparaît avec une échelle réduite
        animate={{ opacity: 1, scale: 1 }} // Puis elle s'agrandit à sa taille initiale
        transition={{ duration: 1.5 }} // Durée de l'animation
      >
        <motion.img 
          src="/src/assets/yann.jpg" 
          alt="Photo de Yann" 
          className="w-48 h-60 rounded-full" 
        />
      </motion.div>
    </div>
  );
};

export default Presentation;
