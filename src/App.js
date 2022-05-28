import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";


function App() {
   return (
      <div>
         <ParticlesBackground />
         <Navbar />
         <Header />
      </div>
   );
}

export default App;