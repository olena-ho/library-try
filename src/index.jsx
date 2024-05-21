import React, { Children } from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import App from './components/App';
import HomePage from "./pages/HomePage";
import Contacts from "./pages/Contacts";
import SearchResults from "./pages/SearchResults";
import '../i18n'; 
import './global.css';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/search-results",
        element: <SearchResults />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
