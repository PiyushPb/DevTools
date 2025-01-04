import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MaterialThemeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MaterialThemeProvider>
  </StrictMode>
);
