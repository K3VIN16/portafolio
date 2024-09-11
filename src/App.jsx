import "./App.css";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { ParticlesBackground } from "./assets/background/ParticlesBackground.jsx";

function App() {
  return (
    <div id="top" className="App">
      <ParticlesBackground />
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
