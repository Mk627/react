import React from 'react'
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Errorpage from './pages/errorpage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '*',
      element: <Errorpage />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App