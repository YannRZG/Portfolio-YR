import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar.jsx";
import Presentation from "./components/Others/Presentation.jsx";
import { LanguageProvider } from "./components/Translate/LanguageContext.jsx";
import { DarkModeProvider } from "./components/Darkmode/DarkmodeContext.jsx";
import Section from "./components/Section/Section.jsx";
import Footer from "./components/footer.jsx";
import Skills from "./components/Section/Skills.jsx";
// import Projects from "./components/Section/Project.jsx";
// import Experience from "./components/Section/Experience.jsx";
import Contact from "./components/Section/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <DarkModeProvider>            
        <header className="mx-auto p-4">
          <Navbar />
        </header>

        <main className="p-4 overflow-x-hidden ">
          <Presentation />
          <Skills />
          {/* <Projects /> */}
          <Section />
          {/* <Experience /> */}
          <Contact />
        </main>

        <footer>
          <Footer />
        </footer>
        </DarkModeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
