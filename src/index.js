
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './CartContext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Store/>,
  },
  {
    path: "/success",
    element: <Success/>,
  },
  {
    path: "/cancel",
    element: <Cancel/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App/>
      <RouterProvider router={router} />
    </CartProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

