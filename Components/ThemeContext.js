import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: '#f7f0f0', 
    text: '#000', 
    header: '#18a999', 
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      header: prevTheme.header === '#18a999' ? '#109648' : '#18a999', 
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
