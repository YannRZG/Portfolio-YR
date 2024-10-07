import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar.jsx";
import Presentation from "./components/Others/Presentation.jsx";
import { LanguageProvider } from "./components/Translate/LanguageContext.jsx";
import { DarkModeProvider, useDarkMode } from "./components/Darkmode/DarkmodeContext.jsx";
import Section from "./components/Section/Section.jsx";
import Footer from "./components/footer.jsx";
import Skills from "./components/Section/Skills.jsx";
import Contact from "./components/Section/Contact.jsx";
import StarsBackground from "./components/StarryBackground.jsx";
import Modal from "./components/Others/ModalBuild.jsx";
// import ContactForm from "./components/Others/ContactForm.jsx";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <LanguageProvider>
        <DarkModeProvider> 
          <Modal isOpen={isModalOpen} onClose={closeModal} /> 
          <AppContent />
        </DarkModeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="">
      {isDarkMode && <StarsBackground />}
      <div className="relative z-10">
        <header className="mx-auto p-4">
          <Navbar />
        </header>

        <main className="p-4 overflow-x-hidden ">
          <Presentation />
          <Skills />
          <Section />
          <Contact />
          {/* <ContactForm /> */}
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
