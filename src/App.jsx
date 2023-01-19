import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./screens/Projects";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppBody } from "./styles/App.styles";

function App() {
  const theme = {
    light: {
      primary: "#e5e5cb",
      secondary: "#1a120b",
      text: "#fffded",
    },
    NavbarHeight: "60px",
    FooterHeight: "60px",
    fontFamily1: "Josefin Sans",
    fontFamily2: "sans-serif",
  };
  const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: ${(props) => props.theme.fontFamily1}, ${(props) =>
    props.theme.fontFamily2};
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <AppBody>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AppBody>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
