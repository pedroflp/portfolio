import React, { createContext, useContext, useState } from 'react';

import { light } from './light';
import { dark } from './dark';
import usePersistedState from '../utils/usePersistedState';

const Context = createContext({
  defaultTheme: dark,
  toggleTheme: () => {},
});

type Props = {
  children: React.ReactChild;
}

export function ThemeContextProvider({ children }: Props) {
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