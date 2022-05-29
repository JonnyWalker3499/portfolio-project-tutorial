import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";
import AboutMe from "./components/AboutMe";


function App() {
   return (
      <div className="app-style">
         <Navbar />
         <Header />
         <ParticlesBackground />
         <AboutMe />
      </div>
   );
}

export default App;