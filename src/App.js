import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";


function App() {
   return (
      <div className="app-style">
         <Navbar />
         <Header />
         <ParticlesBackground />
         <AboutMe />
         <Services />
      </div>
   );
}

export default App;