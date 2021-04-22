import React, { createContext, useContext, useState } from 'react';

const Context = createContext({
  isNavFixed: false,
  handleSetNavFixed: () => {},
});

type Props = {
  children: React.ReactChild;
}

export function ThemeContextProvider({ children }: Props) {
  const [isNavFixed, setIsNavFixed] = useState(false);
  function handleSetNavFixed() {
    setIsNavFixed(true);
  }

  return (
    <Context.Provider value={{ isNavFixed, handleSetNavFixed }}>
    {children}
    </Context.Provider>
  )
}

export function useTheme() {
  const theme = useContext(Context)

  return theme;
}