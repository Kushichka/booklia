import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/homePage';
import { BookPage } from './pages/bookPage';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'works/:bookId',
    element: <BookPage />
  },
]);