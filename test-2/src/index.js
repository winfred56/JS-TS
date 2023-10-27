import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Explore from "./components/Explore";
import Inspiration from "./components/Inspiration";
import Practice from "./components/Practice";
import Order from "./components/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "explore",
        element: <Explore />
    },
    {
        path: "inspiration",
        element: <Inspiration />
    },
    {
        path: "practice",
        element: <Practice />
    },
    {
        path: "order",
        element: <Order />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
