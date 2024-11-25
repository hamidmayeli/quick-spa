import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "pages/layout";

const App = lazy(() => import("pages/App"));
const SecondPage = lazy(() => import("pages/SecondPage"));

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Suspense><App /></Suspense>,
        },
        {
          path: "/second",
          element: <Suspense><SecondPage /></Suspense>,
        },
      ]
    }
  ]);

export default router;
