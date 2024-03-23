import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

//import { Provider } from 'react-redux';
//import { persistor, store } from './redux/store';
import { App } from './components/App';

//import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
