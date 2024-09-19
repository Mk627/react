import React from 'react'
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Errorpage from './pages/errorpage';
import Contact from './pages/Contact';
import Page1 from './pages/nested/Page1';
import Page2 from './pages/nested/Page2';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
      children: [
        {
          path: '/Page1',
          element: < Page1 />
        },
        {
          path: '/Page2',
          element: < Page2 />
        },
      ]
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/Contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <Errorpage />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App