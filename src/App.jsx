import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar.jsx"
import Presentation from "./components/Others/Presentation.jsx";
import { LanguageProvider } from './components/Others/Translate/LanguageContext.jsx';

function App() {


  return (
    <BrowserRouter>
      <LanguageProvider>
    <header>
      <Navbar />
    </header>

    <main className="p-4 mx-auto">
      <Presentation />
    </main>
    </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
