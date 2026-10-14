
import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#7c3aed" },
      secondary: { main: "#06b6d4" },
      background: {
        default: darkMode ? "#050816" : "#f0f4ff",
        paper: darkMode ? "#0d1324" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "'Inter', Arial, sans-serif",
      h1: { fontWeight: 900, letterSpacing: "-0.03em" },
      h2: { fontWeight: 800, letterSpacing: "-0.02em" },
      h3: { fontWeight: 800, letterSpacing: "-0.02em" },
      h6: { fontWeight: 700 },
    },
    shape: { borderRadius: 16 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 50,
            padding: "10px 24px",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 600 },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
