import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { Switch } from '@headlessui/react';
import { motion } from 'framer-motion';
import LanguageToggle from '../Others/Translate/LanguageToggle';

const Navbar = () => {
  // Lire l'état du localStorage au chargement du composant
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

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

          {/* Switch avec soleil et lune */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-800 dark:text-gray-300 text-lg">
              {darkMode ? <FaMoon /> : <FaSun />}
            </span>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              className={`relative inline-flex items-center h-6 rounded-full w-11 ${darkMode ? 'bg-blue-600' : 'bg-green-400'}`}
            >
              <span
                className={`absolute left-1 inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                  darkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </Switch>

            <LanguageToggle />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
