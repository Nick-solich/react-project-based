import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Project1 from "./screens/Projects";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

function App() {
  const theme = {
    NavbarHeight: "60px",
    FooterHeight: "60px",
    fontFamily1: "Josefin Sans",
    fontFamily2: "sans-serif",
  };
  const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: ${(props) => props.theme.fontFamily1}, ${(props) =>
    props.theme.fontFamily2};
      margin: 0;
      padding: 0;
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    `;
  const AppBody = styled.body`
    position: relative;
    background-color: #e5e5cb;
    box-sizing: border-box;
    min-height: calc(
      100vh - ${(props) => props.theme.NavbarHeight} -
        ${(props) => props.theme.FooterHeight}
    );
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <AppBody>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project1 />} />
        </Routes>
      </AppBody>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
