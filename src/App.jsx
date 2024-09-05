import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar.jsx";
import Presentation from "./components/Others/Presentation.jsx";
import { LanguageProvider } from "./components/Translate/LanguageContext.jsx";
import { DarkModeProvider } from "./components/Darkmode/DarkmodeContext.jsx";
import Section from "./components/Section/Section.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <DarkModeProvider>
        <header>
          <Navbar />
        </header>

        <main className="p-4 mx-auto">
          <Presentation />
          <Section />
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
