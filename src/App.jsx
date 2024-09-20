import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar.jsx";
import Presentation from "./components/Others/Presentation.jsx";
import { LanguageProvider } from "./components/Translate/LanguageContext.jsx";
import { DarkModeProvider } from "./components/Darkmode/DarkmodeContext.jsx";
import Section from "./components/Section/Section.jsx";
import Footer from "./components/footer.jsx";
import Skills from "./components/Section/Skills.jsx";
import Contact from "./components/Section/Contact.jsx";
import StarsBackground from "./components/StarryBackground.jsx";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <DarkModeProvider>  
        <div className="">
          <StarsBackground />  
          <div className="relative z-10">
        <header className="mx-auto p-4">
          <Navbar />
        </header>

        <main className="p-4 overflow-x-hidden ">
          <Presentation />
          <Skills />
          <Section />
          <Contact />
        </main>

        <footer>
          <Footer />
        </footer>
          </div>
        </div>
        </DarkModeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
