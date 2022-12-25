import './App.css';
import { Link , Route , Routes } from 'react-router-dom'
import styled from 'styled-components';
import Home from './screens/Home';
import About from './screens/About';

function App() {
  const Navbar = styled.div`
  background-color: aliceblue;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

  return (
    <>
      <Navbar>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
