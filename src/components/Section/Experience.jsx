import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from "../Translate/LanguageContext";
import Translations from "../Translate/Translations";
import ThpLogo from '/src/assets/thpLogo.png';

const Experience = () => {
  const { language } = useLanguage();
  const experienceList = [
    { id: 1, name: "TheHackingProject", image: "/src/assets/thpLogo.png" },
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
    <div className="flex flex-col space-y-8 max-w-5xl w-full mt-10" ref={ref}>
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
      className="dark:bg-gray-800 rounded-md overflow-hidden"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}  // Animate in when in view, animate out when not in view
      exit="exit"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className=" flex flex-row space-x-4">
        <img src={ThpLogo} alt="ThpLogo" className="w-48 h-24" />

        <div className='flex flex-col space-y-2'>
        <p className="text-sm text-gray-500 dark:text-gray-400 m-auto">
          01/2024 - 09/2024
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 m-auto">Développeur Web Fullstack</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 m-auto">
          Titre RNCP Niveau 5
        </p>
        </div>
      </div>
    </motion.li>
  );
};

export default Experience;
