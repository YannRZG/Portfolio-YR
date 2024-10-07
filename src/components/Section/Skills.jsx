import { motion, useInView } from "framer-motion";
import { FaNodeJs, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { SiRubyonrails, SiJavascript, SiReact, SiPrisma, SiInsomnia, SiNextdotjs } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { useLanguage } from "../Translate/LanguageContext";
import Translations from "../Translate/Translations";
import { useRef } from "react";

const Skills = () => {
    const { language } = useLanguage();
    const icons = [
        { icon: <DiRuby className="text-4xl md:text-5xl lg:text-6xl text-red-600" />, name: "Ruby" },
        { icon: <SiRubyonrails className="text-4xl md:text-5xl lg:text-6xl text-red-600" />, name: "Rails" },
        { icon: <SiJavascript className="text-4xl md:text-5xl lg:text-6xl text-yellow-500" />, name: "JavaScript" },
        { icon: <FaNodeJs className="text-4xl md:text-5xl lg:text-6xl text-green-600" />, name: "Node.js" },
        { icon: <SiReact className="text-4xl md:text-5xl lg:text-6xl text-blue-600" />, name: "React" },
        { icon: <SiNextdotjs className="text-4xl md:text-5xl lg:text-6xl text-dark-600" />, name: "Next.js" },
        { icon: <FaGitAlt className="text-4xl md:text-5xl lg:text-6xl text-red-600" />, name: "Git" },
        { icon: <FaGithub className="text-4xl md:text-5xl lg:text-6xl text-black dark:text-white" />, name: "GitHub" },
        { icon: <FaDocker className="text-4xl md:text-5xl lg:text-6xl text-blue-600" />, name: "Docker" },
        { icon: <BiLogoPostgresql className="text-4xl md:text-5xl lg:text-6xl text-blue-600" />, name: "PostgreSQL" },
        { icon: <SiPrisma className="text-4xl md:text-5xl lg:text-6xl text-blue-600" />, name: "Prisma" },
        { icon: <SiInsomnia className="text-4xl md:text-5xl lg:text-6xl text-purple-600" />, name: "Insomnia" },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-8 w-full h-auto mx-auto py-10 relative"
        >
            <AnimatedHeading>
                {Translations[language].skills}
            </AnimatedHeading>

            <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-end sm:w-full sm:space-x-4">
                {icons.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animation inversée
                        transition={{ duration: 0.2, delay: index * 0.1 }} // Délai pour chaque icône
                        whileHover={{ scale: 1.4 }}
                        className="flex flex-col items-center"
                        style={{ transform: `translateY(${Math.sin((index / icons.length) * Math.PI) * 20}px)` }}
                    >
                        {item.icon}
                        <span className="text-xs md:text-sm lg:text-base mt-1">{item.name}</span>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col sm:hidden gap-4">
                {icons.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animation inversée
                        transition={{ duration: 0.2, delay: index * 0.1 }} // Délai pour chaque icône
                        whileHover={{ scale: 1.4 }}
                        className="flex flex-col items-center"
                    >
                        {item.icon}
                        <span className="text-xs md:text-sm lg:text-base mt-1">{item.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Composant pour le titre animé
const AnimatedHeading = ({ children }) => {
    return (
        <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mt-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.h1>
    );
};

export default Skills;
