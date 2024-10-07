import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useDarkMode } from "../Darkmode/DarkmodeContext";
import { useLanguage } from "../Translate/LanguageContext";
import Translations from "../Translate/Translations";
import RaymLogo from "/src/assets/RAYM_favicon.png";
import RaymCycle from "/src/assets/raymB.png";
import Cat from "/src/assets/Chaton.png";
import Modal from "../Modal"; // Import du composant Modal

const Projects = () => {
  const { isDarkMode } = useDarkMode(); // Récupère l'état du mode sombre
  const { language } = useLanguage(); // Récupère la langue actuelle
  const [selectedProject, setSelectedProject] = useState(null); // État pour le projet sélectionné
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer l'ouverture du modal

  const projectList = [
    {
      id: 1,
      name: "Raymote.it",
      url1: "https://raymote-it-dev.fly.dev/", // Lien vers le projet
      url2: "https://github.com/YannRZG/RAYMote_IT",
      language: "Ruby On Rails",
      image: RaymLogo,
      description: "Raymote.it est une plateforme de e-learning, développé en 2 semaines en tant que projet d'examen lors du module 'Full-stack' de The Hacking Project. Il est développé en Ruby on Rails. Le projet est consultable sur GitHub.",
    },
    {
      id: 2,
      name: "RAYM Cycling",
      url1: "https://raym-marketplace.onrender.com/", // Lien vers le projet
      url2: "https://github.com/YannRZG/Raym_api",
      language: "React / Ruby",
      image: RaymCycle,
      description: "RAYM Cycling est un e-commerce de vélos. Il a été réalisé en 2 semaines en tant que projet d'examen lors du module 'Dev' de The Hacking Project. Le projet est développé en React et utilise le framework Ruby on Rails pour la partie backend. Le projet est consultable sur GitHub.",
    },
    {
      id: 3,
      name: "Catisfaction",
      url1: "https://catisfaction.com", // Lien vers le projet
      url2: "https://github.com/YannRZG/Projet_chaton_ultimate",
      language: "Ruby on Rails",
      image: Cat,
      description: "Catisfaction est un e-commerce de photos de chatons. Il a été réalisé en 1 semaines en tant que projet d'entrainement en vue de l'examen final lors du module 'Full-stack' de The Hacking Project. Le projet est développé en Ruby on Rails et le code est consultable sur GitHub.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const h1Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div ref={ref} className="flex flex-col items-center space-y-8 w-full">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300"
        variants={h1Variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {Translations[language].projects}
      </motion.h1>

      {/* Project Cards */}
      <ul className="flex flex-col gap-7 opacity-90">
        {projectList.map((project) => (
          <AnimatedCard
            key={project.id}
            project={project}
            variants={cardVariants}
            isDarkMode={isDarkMode}
            openModal={openModal} // Passe la fonction d'ouverture du modal
          />
        ))}
      </ul>

      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedProject.image}
          title={selectedProject.name}
          content={selectedProject.description}
          projectUrl={selectedProject.url1} // URL du projet
          codeUrl={selectedProject.url2} // URL du code
          buttonLabel1="Consulter le site" // Texte du bouton de redirection
          buttonLabel2="Consulter le code" // Texte du bouton de redirection
        />
      )}
    </div>
  );
};

// Component for the animated card
const AnimatedCard = ({ project, variants, isDarkMode, openModal }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      className="flex flex-row justify-center items-center border dark:border-gray-200  rounded-md shadow-lg overflow-hidden h-28 transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      whileHover={{ scale: 1.15 }} // Animation on hover
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => openModal(project)} // Ouvre le modal au clic
    >
      <img
        src={
          project.id === 1
            ? isDarkMode
              ? project.image
              : project.image
            : project.image
        }
        alt={project.name}
        className="ml-2 w-36 h-auto"
      />
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-100">
          {project.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-200">{project.language}</p>
      </div>
    </motion.li>
  );
};

export default Projects;
