import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';

import { ThemeProvider } from 'styled-components';
import { useTheme } from './styles/themes/ThemeContext';
import GlobalStyle from './styles/global';

import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';
import BackTop from './components/backtop/BackTop';
import { ThemeSwitcher } from './components/themeswitcher/ThemeSwitcher';

function AppTheme() {
  const { defaultTheme } = useTheme();

  return (
    <ThemeProvider theme={defaultTheme.title === 'dark' ? dark : light}>
      <GlobalStyle />
      <Router>
        <MainRoutes />
        <ThemeSwitcher />
        <BackTop />
      </Router>
    </ThemeProvider>
  );
}

export default AppTheme;
