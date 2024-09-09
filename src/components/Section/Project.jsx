import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useDarkMode } from '../Darkmode/DarkmodeContext';
import { useLanguage } from "../Translate/LanguageContext";
import Translations from "../Translate/Translations";
import RaymLogo from '/src/assets/RAYM_favicon.png';
import RaymCycle from '/src/assets/raymB.png';
import Cat from '/src/assets/Chaton.png';

const Projects = () => {
  const { isDarkMode } = useDarkMode(); // Récupère l'état du mode sombre
  const { language } = useLanguage(); // Récupère la langue actuelle
  const projectList = [
    {
      id: 1,
      name: "Raymote.it",
      url: "https://raymote-it-dev.fly.dev/", // Lien vers le projet
      language: "Ruby On Rails",
      image: RaymLogo,

    },
    {
      id: 2,
      name: "RAYM Cycling",
      url: "https://raym-marketplace.onrender.com/", // Lien vers le projet
      language: "React / Ruby",
      image: RaymCycle
    },
    {
      id: 3,
      name: "Catisfaction",
      url: "https://catisfaction.com", // Lien vers le projet
      language: "Ruby on Rails",
      image: Cat
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const h1Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center space-y-8 w-full sm:h-[30vh] mt-8">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300"
        variants={h1Variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {Translations[language].projects}
      </motion.h1>

      {/* Project Cards */}
      <ul className="flex flex-col md:flex-row lg:flex-row gap-7">
        {projectList.map((project) => (
          <AnimatedCard
            key={project.id}
            project={project}
            variants={cardVariants}
            isDarkMode={isDarkMode}
          />
        ))}
      </ul>
    </div>
  );
};

// Component for the animated card
const AnimatedCard = ({ project, variants, isDarkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.a
      href={project.url}  // Lien du projet
      target="_blank"  // Ouvrir dans un nouvel onglet
      rel="noopener noreferrer"  // Pour des raisons de sécurité
      className="block"  // Permet à l'élément d'être entièrement cliquable
    >
      <motion.li
        ref={ref}
        className="flex flex-row justify-center items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg overflow-hidden h-28 transform transition-transform duration-300 ease-out hover:scale-105"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
        whileHover={{ scale: 1.05 }}  // Animation on hover
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={project.id === 1 ? (isDarkMode ? project.image : project.image) : project.image}
          alt={project.name}
          className="ml-2 w-36 h-auto"
        />
        <div className="p-4 flex flex-col">
          <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">
            {project.name}
          </h3>
          <p className='text-sm text-gray-500'>
            {project.language}
          </p>
        </div>
      </motion.li>
    </motion.a>
  );
};

export default Projects;
