"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
   
    const storedTheme = getFromLocalStorage();
    setTheme(storedTheme);
  }, []);

  const toggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
      localStorage.setItem("theme", theme);
    
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
};
