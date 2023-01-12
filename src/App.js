import './styles/App.css';
import { Route , Routes } from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project1 from './screens/Projects';
import styled from 'styled-components';

function App() {
  // Variable Section
  const Body = styled.body`
  margin: 0;
  padding: 0;
  position: relative;
  background-color: #E5E5CB;
  box-sizing: border-box;
  /* Applied From Navbar's height and Footer's height*/
  min-height: calc(100vh - 60px - 60px);
  `
  return (
    <>
      <Navbar />
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project1 />} />
        </Routes>
      </Body>
      <Footer />
    </>
  );
}

export default App;
