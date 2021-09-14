import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks";
/**
 * Esta es la configuración de nuestro temas
 * aqui podrías agregar los que necesites y tener una
 * gran variedad para tus usuarios.
 */
const themes = {
  default: {
    colors: {
      background: "#f1f1f1", // Color de fondo
      bars: "#000",
      logo: "#4B0082",
      surface: "#FFF", // Color de fondo de tarjetas.
      text: "#000", // Color del texto
      text2: "#000", // Color de las cantidades
    },
  },
  dark: {
    colors: {
      background: "#111111",
      bars: "#fff",
      logo: "#4B0082",
      surface: "#32383b",
      text: "#fff",
      text2: "#317e94",
    },
  },
};

function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={themes[theme]}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
