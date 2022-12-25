import './App.css';
import { Link , Route , Routes } from 'react-router-dom'
import styled from 'styled-components';
import Home from './screens/Home';
import About from './screens/About';

function App() {
  // Styled Component Section
  const Navbar = styled.ul`
  background-color: aliceblue;
  display: flex;
  position: relative;
  align-items: center;

  `
  const NavbarDiv = styled.div`
  padding: 10px 5px;
  
  `
  // Variable Section



  return (
    <>
      <Navbar>
        <NavbarDiv><Link to="/">Home</Link></NavbarDiv>
        <NavbarDiv><Link to="/about">About</Link></NavbarDiv>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
