import { motion } from "framer-motion";
import { FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { SiRubyonrails, SiJavascript, SiReact, SiPrisma, SiInsomnia } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { useLanguage } from "../Translate/LanguageContext";
import Translations from "../Translate/Translations";

const Skills = () => {
    const { language } = useLanguage(); // Récupère la langue actuelle
    const icons = [
        { icon: <DiRuby className="text-4xl text-red-600" />, name: "Ruby" },
        { icon: <SiRubyonrails className="text-4xl text-red-600" />, name: "Rails" },
        { icon: <SiJavascript className="text-4xl text-yellow-500" />, name: "JavaScript" },
        { icon: <SiReact className="text-4xl text-blue-600" />, name: "React" },
        { icon: <FaNodeJs className="text-4xl text-green-600" />, name: "Node.js" },
        { icon: <BiLogoPostgresql className="text-4xl text-blue-600" />, name: "PostgreSQL" },
        { icon: <SiPrisma className="text-4xl text-blue-600" />, name: "Prisma" },
        { icon: <FaGitAlt className="text-4xl text-red-600" />, name: "Git" },
        { icon: <FaGithub className="text-4xl text-black" />, name: "GitHub" },
        { icon: <SiInsomnia className="text-4xl text-purple-600" />, name: "Insomnia" },
    ];

    return (
        <div className="flex flex-col items-center space-y-8 w-full h-[60vh] mx-auto relative">
            <AnimatedHeading>
                {Translations[language].skills}
            </AnimatedHeading>

            {/* Disk wrapper */}
            <div className="relative w-full h-[400px] perspective">
                <motion.div
                    className="absolute w-full h-full flex justify-center items-center"
                    style={{
                        transformStyle: "preserve-3d",
                        animation: `spin 20s linear infinite`, // Spins the disk
                    }}
                >
                    {icons.map((item, index) => {
                        // Distribute icons evenly on a circular disk
                        const angle = (index / icons.length) * 2 * Math.PI; // Angle for positioning on the disk

                        const x = 150 * Math.cos(angle); // X-coordinate
                        const y = 150 * Math.sin(angle); // Y-coordinate

                        return (
                            <motion.div
                                key={index}
                                className="absolute flex flex-col items-center space-x-2"
                                style={{
                                    transform: `translate(${x}px, ${y}px)`,
                                }}
                            >
                                {item.icon}
                                <span className="text-sm mt-1">{item.name}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

// Component for animated heading
const AnimatedHeading = ({ children }) => {
    return (
        <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mt-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.h1>
    );
};

export default Skills;
