import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../Globalstyle';
import { lightTheme } from '../Themes';
import { routes } from '../routes';

import { Layout } from './Layout';
import { HomePage } from '@/pages/HomePage/HomePage';

const MainPage = lazy(() => import('../pages/MainPage'));

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        {/* <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route> */}
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
};
