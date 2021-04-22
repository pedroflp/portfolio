import React, { createContext, useContext } from 'react';

const Context = createContext({
 
});

type Props = {
  children: React.ReactChild;
}

export function AppContextProvider({ children }: Props) {


  return (
    <Context.Provider value={{  }}>
    {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  const appContext = useContext(Context)

  return appContext;
}