import React from 'react'
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Errorpage from './pages/errorpage';
import Contact from './pages/Contact';


const App = () => {
  const router = createBrowserRouter([
    // {
    //   path: '/',
    //   element: <Routelayout />,
    //   children: [
    //     {
    //       path: '/about',
    //       element: <AboutPage />
    //     },
    //     {
    //       path: '/Contact',
    //       element: <Contact />
    //     },
    //   ]
    // },


    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '*',
      element: <Errorpage />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App