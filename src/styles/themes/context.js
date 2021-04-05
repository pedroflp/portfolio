import React, { createContext, useContext } from 'react';

import light from '../themes/light';
import dark from '../themes/dark';
import usePersistedState from '../utils/usePersistedState';

const Context = createContext({
  defaultTheme: dark,
  toggleTheme: () => {},
});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = usePersistedState('theme', dark);

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