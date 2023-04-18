import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import Layouy from './pages/Layouy';
import Admin from './pages/Admin';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouy />,
    
  },
  {
    path: '/admin',
    element: <Admin/>,
  },
  
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
