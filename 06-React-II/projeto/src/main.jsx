import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import GlobalStorage from './components/GlobalStorage';
import Logout from './screens/Logout';
import Register from './screens/Register';
import Product from './screens/Product';
import ShoppingCart from './screens/ShoppingCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product/:id",
    element: <Product/>,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/logout",
    element: <Logout/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStorage>
      <RouterProvider router={router} />
    </GlobalStorage>
  </React.StrictMode>,
)
