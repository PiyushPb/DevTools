// src/context/ThemeContext.tsx

import React, { createContext, useContext, useState, useEffect } from "react";
import  themes  from "../constants/theme";

// Define type for the context state
interface ThemeContextType {
  currentTheme: string;
  switchTheme: (theme: string) => void;
}

// Create the context with default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the ThemeProvider component to wrap around the app
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  // Retrieve the theme from localStorage if available on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    } else {
      setCurrentTheme("light"); // Default theme
    }
  }, []);

  // Switch theme function
  const switchTheme = (theme: string) => {
    if (themes[theme]) {
      setCurrentTheme(theme);
      localStorage.setItem("theme", theme); // Save the theme to localStorage
    }
  };

  // Apply theme to document element (for global styling)
  useEffect(() => {
    const theme = themes[currentTheme];
    if (theme) {
      Object.keys(theme).forEach((key) => {
        document.documentElement.classList.remove(
          ...Object.values(themes).map((t) => t[key])
        );
        document.documentElement.classList.add(theme[key]);
      });
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the theme context in other components
const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
