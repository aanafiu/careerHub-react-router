import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home.jsx';
import Banner from './assets/components/Banner.jsx';
import Footer from './assets/components/Footer.jsx';
import Jobs from './assets/components/Jobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Banner></Banner>
      },
      {
        path:"footer",
        element:<Footer></Footer>
      },
      {
        path:"jobs",
        element:<Jobs></Jobs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
