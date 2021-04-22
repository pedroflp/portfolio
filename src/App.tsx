import React from 'react';

import { ThemeContextProvider } from './contexts/context';
import AppTheme from './AppTheme';

function App() {
  return (
    <ThemeContextProvider>
      <AppTheme />
    </ThemeContextProvider>

  );
}

export default App;
