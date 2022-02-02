import React from 'react';

import { AppContextProvider } from './contexts/Context';
import { ThemeContextProvider } from './styles/themes/ThemeContext';
import AppTheme from './AppTheme';
import Navbar from './components/navbar/Navbar';
import { ThemeSwitcher } from './components/themeswitcher/ThemeSwitcher';
import Footer from './components/footer/Footer';
import BackTop from './components/backtop/BackTop';

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
