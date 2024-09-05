import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useDarkMode } from '../Darkmode/DarkmodeContext'; // Corrigez la casse ici

const Projects = () => {
  const { isDarkMode } = useDarkMode(); // Récupère l'état du mode sombre
  const projectList = [
    {
      id: 1,
      name: "Raymote.it",
      images: {
        light: "/src/assets/RAYM_logo.png",
        dark: "/src/assets/RAYM-logo-white.png" // Assurez-vous d'avoir une image pour le mode sombre
      }
    },
    { id: 2, name: "RAYM Cycling", image: "/path/to/image2.jpg" },
    { id: 3, name: "Catisfaction", image: "/path/to/image3.jpg" },
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
    <div ref={ref} className="flex flex-col space-y-8 max-w-xl w-full">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300"
        variants={h1Variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h1>

      {/* Project Cards */}
      <ul className="grid grid-cols-1 gap-4">
        {projectList.map((project) => (
          <AnimatedCard
            key={project.id}
            project={project}
            variants={cardVariants}
            isDarkMode={isDarkMode}  // Pass the dark mode state to the card component
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
    <motion.li
      ref={ref}
      className="flex flex-row dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg overflow-hidden"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        src={project.id === 1 ? (isDarkMode ? project.images.dark : project.images.light) : project.image}
        alt={project.name}
        className="w-1/3 h-24 object-cover"
      />
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-700 dark:text-gray-300">
          {project.name}
        </h3>
      </div>
    </motion.li>
  );
};

export default Projects;
