import React, { createContext, useState, useContext } from 'react';
import { colors } from './styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: colors.snow, 
    text: colors.black, 
    header: colors.persianGreen, 
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      header: prevTheme.header === colors.persianGreen ? colors.shamrockGreen : colors.persianGreen, 
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
