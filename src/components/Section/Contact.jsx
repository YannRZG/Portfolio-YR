import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { useRef } from "react";

const Contact = () => {
  const contactList = [
    { id: 1, method: "Email", info: "yann@example.com", image: <FaMailBulk size={32} /> },
    { id: 3, method: "LinkedIn", info: "linkedin.com/in/yann", image: <FaLinkedin size={32} /> },
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div className="flex flex-col space-y-8 max-w-5xl w-5/6 mt-6" ref={ref}>
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300"
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate heading when in view
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact
      </motion.h1>

      {/* Contact Cards */}
      <ul className="grid grid-cols-1 gap-6">
        {contactList.map((contact) => (
          <AnimatedContactCard
            key={contact.id}
            contact={contact}
            variants={cardVariants}
          />
        ))}
      </ul>
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
      className="dark:bg-gray-800 rounded-md overflow-hidden flex flex-row justify-start"
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
          {contact.info}
        </p>
      </div>
    </motion.li>
  );
};

export default Contact;
