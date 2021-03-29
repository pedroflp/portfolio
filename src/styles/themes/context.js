import React, { createContext, useContext, useState } from 'react';

import light from '../themes/light';
import dark from '../themes/dark';

const Context = createContext({
  defaultTheme: dark,
  toggleTheme: () => {},
});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    setTheme(theme === dark ? light : dark);
  }
  
  return (
    <Context.Provider value={{ defaultTheme: theme, toggleTheme }}>
    {children}
    </Context.Provider>
  )
}

export function useTheme() {
  const theme = useContext(Context)

  return theme;
}