import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import DarkModeToggle from '../Darkmode/DarkmodeToggle'; // Assurez-vous d'ajuster ce chemin en fonction de votre structure de dossier
import LanguageToggle from '../Translate/LanguageToggle';

const Navbar = () => {
  return (
    <motion.nav
      className="p-4"
      initial={{ opacity: 0, y: -50 }} // Animation initiale (fondu + translation vers le haut)
      animate={{ opacity: 1, y: 0 }} // Arrive à sa position normale
      transition={{ duration: 1.5 }} // Durée de l'animation
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Nom et logo */}
        <motion.div
          className="text-white text-lg font-bold"
          initial={{ opacity: 0, x: -50 }} // Part de la gauche
          animate={{ opacity: 1, x: 0 }} // Arrive à sa position normale
          transition={{ duration: 1.2 }} // Durée de l'animation
        >
          <a href="#" style={{ fontFamily: 'chakra Petch' }} className="text-4xl md:text-6xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600">
            Yann Rezigui
          </a>
        </motion.div>

        {/* Icônes et switch */}
        <motion.div
          className="flex flex-col md:flex-row items-center space-y-4 md:space-x-8 md:space-y-0"
          initial={{ opacity: 0, x: 50 }} // Part de la droite
          animate={{ opacity: 1, x: 0 }} // Arrive à sa position normale
          transition={{ duration: 1.2 }} // Durée de l'animation
        >
          <ul className="flex flex-wrap space-x-4 md:space-x-8">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600">
                <FaLinkedin className="text-5xl" />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600">
                <FaGithub className="text-5xl" />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600">
                <FaMailBulk className="text-5xl" />
              </a>
            </li>
          </ul>
          <div className='flex flex-row md:flex-row sm:flex-row items-center space-y-4 md:space-x-8 md:space-y-0'>
          {/* Composant DarkModeToggle */}
          <DarkModeToggle />

          {/* Language Toggle */}
          <LanguageToggle />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
