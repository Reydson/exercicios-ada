import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';
import GlobalStorage from './components/GlobalStorage.jsx';
import Logout from './screens/Logout.jsx';
import Register from './screens/Register.jsx';
import Game from './screens/Game.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/game/:id",
    element: <Game/>,
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
