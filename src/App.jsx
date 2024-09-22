import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/Errorpage";
import RootLayOut from "./components/RouteLayout";
import HomePage from "./pages/home/Homepage";


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'about-page',
          element: <AboutPage />
        },
        {
          path: 'contact-page',
          element: <ContactPage />
        },
      ]
    },

    {
      path: '*',
      element: <NotFound />
    },


  ]);

  return <RouterProvider router={router} />;
}
export default App