import React, { useContext, useEffect, useState } from "react";

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(global.window?.__theme || "light");

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  const toggleTheme = () => {
    global.window.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export { ThemeProvider, useTheme };
