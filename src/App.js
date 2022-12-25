import './App.css';
import { Link , Route , Routes } from 'react-router-dom'
import styled from 'styled-components';
import Home from './screens/Home';
import About from './screens/About';

function App() {
  // Styled Component Section
  const Navbar = styled.div`
  background-color: white;
  color: #FFFDED;
  display: flex;
  position: relative;
  align-items: center;
  height: 60px;
  gap: 40px;
  font-size: 1.2rem;
  `
  const linkStyle = {
    margin: "5px",
    textDecoration: "none",
    color: 'blue'
  };
  
  // Variable Section



  return (
    <>
      <Navbar>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
