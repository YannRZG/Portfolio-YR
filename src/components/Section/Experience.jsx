import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from "../Translate/LanguageContext";
import { useDarkMode } from "../Darkmode/DarkmodeContext"; // Importer le contexte du mode sombre
import Translations from "../Translate/Translations";
import ThpLogo from '/src/assets/thpLogo.png';
import ThpGray from '/src/assets/thp.png';

const Experience = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode(); // Récupère l'état du mode sombre
  const experienceList = [
    { id: 1, name: "TheHackingProject", image: isDarkMode ? ThpGray : ThpLogo, url: "https://www.thehackingproject.org" }, // Utilise l'image en fonction du mode
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },  // Starts off to the right
    visible: { opacity: 1, x: 0 },   // Animates to its original position
    exit: { opacity: 0, x: 100 }     // Animates back to the right
  };

  const h1Variants = {
    hidden: { opacity: 0, x: 100 },  // Starts off to the right
    visible: { opacity: 1, x: 0 },   // Animates to its original position
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div className="flex flex-col space-y-8 w-full items-center justify-start" ref={ref}>
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300"
        variants={h1Variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {Translations[language].formation}
      </motion.h1>

      {/* Experience Cards */}
      <ul className="grid grid-cols-1 gap-6">
        {experienceList.map((experience) => (
          <AnimatedExperienceCard
            key={experience.id}
            experience={experience}
            variants={cardVariants}
          />
        ))}
      </ul>
    </div>
  );
};

// Component for the animated experience card
const AnimatedExperienceCard = ({ experience, variants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      className="dark:border rounded-md overflow-hidden flex flex-row opacity-70"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}  // Animate in when in view, animate out when not in view
      exit="exit"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href={experience.url} target="_blank" rel="noopener noreferrer" className='flex items-center m-2'> {/* Lien vers le site */}
        <img src={experience.image} alt={experience.name} className="w-50 h-8 sm:h-10 md:h-12 lg:h-14" />
      </a>
      <div className='flex flex-col space-y-2 p-4'>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-500 dark:text-gray-300 m-auto">
          01/2024 - 09/2024
        </p>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-500 dark:text-gray-300 m-auto">Développeur Web Fullstack</p>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-500 dark:text-gray-300 m-auto">
          Titre RNCP Niveau 5
        </p>
      </div>
    </motion.li>
  );
};

export default Experience;
