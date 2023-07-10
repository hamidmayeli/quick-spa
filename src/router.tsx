import { lazy, Suspense } from 'react';
import './index.css'
import { createBrowserRouter } from 'react-router-dom';

const App = lazy(() => import('./App'));
const SecondPage = lazy(() => import('./SecondPage'));

const router = createBrowserRouter([
    {
      path: "/",
      element: <Suspense><App /></Suspense>,
    },
    {
      path: "/second",
      element: <Suspense><SecondPage /></Suspense>,
    },
  ]);

export default router;
