import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Home from './components/Home/Home.js'
import ErrorPage from './ErrorPage.js'
import reportWebVitals from './reportWebVitals';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio'
import ContactMe from './components/ContactMe/ContactMe'

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path: "/AboutMe",
        element: <AboutMe/>,
      },
      {
        path: "/Portfolio",
        element: <Portfolio/>
      },
      {
        path: "/ContactMe",
        element: <ContactMe/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
