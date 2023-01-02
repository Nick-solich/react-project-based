import './styles/App.css';
import { Route , Routes } from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project1 from './screens/Projects';

function App() {
  // Variable Section
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project1 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
