import './styles/App.css';
import { Route , Routes } from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import Navbar from './components/Navbar';

function App() {
  // Variable Section
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
