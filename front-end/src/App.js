import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import RouteMap from './Routes';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <RouteMap />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
