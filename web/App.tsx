import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {useAppMode} from './src/hooks';
import {lightTheme, theme} from './src/style/Theme';
import {RouterProvider} from 'react-router-dom';
import {router} from './src/router';

const WebApp = () => {
  return <Entry />;
};

const Entry: React.FunctionComponent = () => {
  const {isLight} = useAppMode();

  const baseTheme = isLight ? lightTheme : theme;

  return (
    <ThemeProvider theme={baseTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default WebApp;
