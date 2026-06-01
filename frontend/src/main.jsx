import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import  { Toaster } from 'react-hot-toast';

const routers = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/register",
          element: <RegisterPage />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
         {
          path: "/dashboard",
          element: <Dashboard />
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
    <Toaster />
  </StrictMode>,
)
