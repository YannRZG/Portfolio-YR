import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { useRef } from "react";

const Contact = () => {
  const contactList = [
    { id: 1, method: "Email", info: "yann.rezigui@gmail.com", image: <FaMailBulk size={32} />, link: "mailto:yann.rezigui@gmail.com" }, // Ajout du lien mailto
    { id: 3, method: "LinkedIn", info: "https://www.linkedin.com/in/yann-rezigui-59b79a1b0/", image: <FaLinkedin size={32} />, link: "https://www.linkedin.com/in/yann-rezigui-59b79a1b0/" }, // Ajout du lien LinkedIn
    { id: 2, method: "Téléphone", info: "06.60.43.49.67", image: <FaPhone size={32} /> },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // Slide from the right
    visible: { opacity: 1, x: 0 }, // Move to original position
    exit: { opacity: 0, x: 100 } // Slide back to the right when exiting
  };

  const headingVariants = {
    hidden: { opacity: 0, x: 100 }, // Slide from the right
    visible: { opacity: 1, x: 0 }, // Move to original position
  };

  return (
    <div className="flex flex-col items-center w-auto mt-12"> {/* Conteneur principal */}
      <div className="flex flex-col items-center w-full max-w-md"> {/* Div imbriquée pour centrer horizontalement */}
        <motion.h1
          className="text-3xl text-center md:text-4xl font-bold text-gray-700 dark:text-gray-300"
          variants={headingVariants}
          initial="hidden"
          animate="visible" // Animate heading when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact
        </motion.h1>

        {/* Contact Cards */}
        <ul className="grid grid-cols-1 gap-6 w-full text-left"> {/* Justification à gauche */}
          {contactList.map((contact) => (
            <AnimatedContactCard
              key={contact.id}
              contact={contact}
              variants={cardVariants}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

// Component for the animated contact card
const AnimatedContactCard = ({ contact, variants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      className="dark:bg-gray-800 rounded-md overflow-hidden flex flex-row justify-start w-full" // Justifié à gauche et occupe toute la largeur
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate card when in view
      exit="exit"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center">
        {contact.image}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">
          {contact.method}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {contact.link ? ( // Vérifiez si un lien est présent
            <a href={contact.link} className="text-blue-600 hover:underline">
              {contact.info}
            </a>
          ) : (
            contact.info
          )}
        </p>
      </div>
    </motion.li>
  );
};

export default Contact;
