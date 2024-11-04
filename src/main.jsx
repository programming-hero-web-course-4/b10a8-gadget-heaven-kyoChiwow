import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/allproducts/:product_id",
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('/gadgetsData.json')
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
