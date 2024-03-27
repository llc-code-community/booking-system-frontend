import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../Globalstyle';
import { lightTheme } from '../Themes';
import { routes } from '../routes';

import { Layout } from './Layout';

// const MainPage = lazy(() => import('../pages/MainPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<FavoritesPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
};
