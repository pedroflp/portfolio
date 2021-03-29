import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import{ useTheme } from './styles/themes/context';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';

function AppTheme() {
  const { defaultTheme } = useTheme();

  return (
    <ThemeProvider theme={defaultTheme.title === 'dark' ? dark : light}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default AppTheme;
