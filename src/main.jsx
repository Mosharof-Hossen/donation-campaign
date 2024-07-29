import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Donations from './Components/Donations/Donations.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/donations",
        element: <Donations></Donations>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/view-details/:viewId",
        loader:()=>fetch("../public/data.json"),
        element: <ViewDetails></ViewDetails>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
