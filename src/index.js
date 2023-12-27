import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './redux/store';
import { AppRouter as router } from './AppRouter';
import { Root } from './components/Root';
import './API/firebase';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={router}>
        <Root />
      </RouterProvider>

    </Provider>
  </React.StrictMode>
);