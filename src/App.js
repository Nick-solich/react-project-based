import './styles/App.css';
import { Route , Routes } from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import Navbar from './components/Navbar';
import Project1 from './screens/Project1';

function App() {
  // Variable Section
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project1" element={<Project1 />} />
      </Routes>
    </>
  );
}

export default App;
