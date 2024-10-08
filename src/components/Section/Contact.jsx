import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const contactList = [
    {
      id: 1,
      method: "Email",
      info: "yann.rezigui@gmail.com",
      image: <FaMailBulk size={38} />,
      link: "mailto:yann.rezigui@gmail.com",
    },
    {
      id: 2,
      method: "LinkedIn",
      info: "https://www.linkedin.com/in/yann-rezigui-59b79a1b0/",
      image: <FaLinkedin size={38} />,
      link: "https://www.linkedin.com/in/yann-rezigui-59b79a1b0/",
    },
    {
      id: 3,
      method: "Téléphone",
      info: "06.60.43.49.67",
      image: <FaPhone size={38} />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-10 ">
      <div className="max-w-6xl w-full">
        <motion.h1
          className="text-3xl text-center md:text-4xl font-bold text-gray-700 dark:text-gray-100 mb-8"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Informations de Contact
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="grid grid-cols-1 gap-6">
            {contactList.map((contact) => (
              <AnimatedContactCard
                key={contact.id}
                contact={contact}
                variants={cardVariants}
              />
            ))}
          </div>

          <AnimatedContactForm variants={formVariants} />
        </div>
      </div>
    </div>
  );
};

// Composant pour les cartes animées de contact
const AnimatedContactCard = ({ contact, variants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      className="rounded-md overflow-hidden flex flex-row justify-start w-full  p-4 "
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center m-4">
        {contact.image}
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-gray-950 dark:text-gray-100">
          {contact.method}
        </h3>
        <p className="text-md text-gray-600 dark:text-gray-400">
          {contact.link ? (
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

// Composant pour le formulaire de contact avec animation
const AnimatedContactForm = ({ variants }) => {
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-8 rounded-lg shadow-lg light:bg-gray-100"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">
        Formulaire de Contact
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block text-md font-medium text-gray-900 dark:text-gray-100">Nom</label>
          <input
            type="text"
            name="user_name"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            placeholder="Votre nom"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-900 dark:text-gray-100">Email</label>
          <input
            type="email"
            name="user_email"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            placeholder="Votre email"
            required
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-900 dark:text-gray-100">Message</label>
          <textarea
            name="message"
            rows="4"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            placeholder="Votre message"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Envoyer
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
