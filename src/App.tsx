import React from 'react';

import { AppContextProvider } from './contexts/Context';
import { ThemeContextProvider } from './styles/themes/ThemeContext';
import AppTheme from './AppTheme';

function App() {
  return (
    <AppContextProvider>
      <ThemeContextProvider>
        <AppTheme />
      </ThemeContextProvider>
    </AppContextProvider>
  );
}

export default App;
