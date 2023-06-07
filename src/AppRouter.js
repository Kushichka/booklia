import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { BookPage } from './pages/BookPage';
import { Root } from './components/Root';
import { PageNotFound } from './pages/PageNotFound';

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
        path: 'works/:bookId',
        element: <BookPage />
      }
    ]
  }  
]);