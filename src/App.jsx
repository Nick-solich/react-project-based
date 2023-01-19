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
  };
  const GlobalStyles = createGlobalStyle`
    * {
      position: relative;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "YouTube Sans","Roboto",sans-serif;
      /* font-family: "Josefin Sans", sans-serif; */
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    h1 ,h2 ,h3 ,h4 ,h5 ,h6{
      line-height: 1.2;
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
