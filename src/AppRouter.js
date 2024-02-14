import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from './components/pages/HomePage';
import { SearchPage } from './components/pages/SearchPage';
import { BookPage } from './components/pages/BookPage';
import { Root } from './components/Root';
import { PageNotFound } from './components/pages/PageNotFound';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'book/:bookId',
        element: <BookPage />
      }
    ]
  }  
]);