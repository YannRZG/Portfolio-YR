import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { SiRubyonrails, SiJavascript, SiReact, SiPrisma, SiInsomnia } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { useLanguage } from "../Translate/LanguageContext";
import Translations from "../Translate/Translations";

const Skills = () => {
    const { language } = useLanguage(); // Récupère la langue actuelle

    return (
        <div className="flex flex-col items-center space-y-8 w-full md:h-[40vh] mx-auto">
            <AnimatedHeading>
                {Translations[language].skills}
            </AnimatedHeading>

            {/* Grid container for the quincunx layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center">
                <AnimatedSkill icon={<DiRuby className="text-4xl text-red-600" />} text="Ruby" />
                <AnimatedSkill icon={<SiRubyonrails className="text-4xl text-red-600" />} text="Rails" />
                <AnimatedSkill icon={<SiJavascript className="text-4xl text-yellow-500" />} text="JavaScript" />
                <AnimatedSkill icon={<SiReact className="text-4xl text-blue-600" />} text="React" />
                <AnimatedSkill icon={<FaNodeJs className="text-4xl text-green-600" />} text="Node.js" />
                <AnimatedSkill icon={<BiLogoPostgresql className="text-4xl text-blue-600" />} text="PostgreSQL" />
                <AnimatedSkill icon={<SiPrisma className="text-4xl text-blue-600" />} text="Prisma" />
                <AnimatedSkill icon={<FaGitAlt className="text-4xl text-red-600" />} text="Git" />
                <AnimatedSkill icon={<FaGithub className="text-4xl text-black" />} text="GitHub" />
                <AnimatedSkill icon={<SiInsomnia className="text-4xl text-purple-600" />} text="Insomnia" />
            </div>
        </div>
    );
};

// Component for animated heading
const AnimatedHeading = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <motion.h1
            ref={ref}
            className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mt-8"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.h1>
    );
};

// Component for animated skill items
const AnimatedSkill = ({ icon, text }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center space-x-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
        >
            {icon}
            <span className="text-xl">{text}</span>
        </motion.div>
    );
};

export default Skills;
