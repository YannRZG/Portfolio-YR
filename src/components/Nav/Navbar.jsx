import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import DarkModeToggle from "../Darkmode/DarkmodeToggle";
import { useDarkMode } from "../Darkmode/DarkmodeContext"; // Assurez-vous que ce chemin est correct
import LanguageToggle from "../Translate/LanguageToggle";
import YR from "/src/assets/YR_light_mode.png"; // Logo pour le mode clair
import YrLight from "/src/assets/YR_dark_mode.png"; // Logo pour le mode sombre

const Navbar = () => {
  const { isDarkMode } = useDarkMode(); // Récupère l'état du mode sombre

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }} // Animation initiale (fondu + translation vers le haut)
      animate={{ opacity: 1, y: 0 }} // Arrive à sa position normale
      transition={{ duration: 1.5 }} // Durée de l'animation
    >
      <div className="container navbar mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Nom et logo */}
        <motion.div
          className="text-white text-lg font-bold"
          initial={{ opacity: 0, x: -50 }} // Part de la gauche
          animate={{ opacity: 1, x: 0 }} // Arrive à sa position normale
          transition={{ duration: 1.2 }} // Durée de l'animation
        >
          <img src={isDarkMode ? YrLight : YR} alt="Logo de Yann Rezigui" /> {/* Changement dynamique du logo */}
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
              <a
                href="https://www.linkedin.com/in/yann-rezigui-59b79a1b0/"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
              >
                <FaLinkedin className="text-5xl" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/YannRZG"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
              >
                <FaGithub className="text-5xl" />
              </a>
            </li>
            <li>
              <a
                href="mailto:yann.rezigui@outlook.fr"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
              >
                <FaMailBulk className="text-5xl" />
              </a>
            </li>
          </ul>
          <div className="flex flex-row space-x-4 md:flex-row sm:flex-row items-center md:space-x-8 md:space-y-0">
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
