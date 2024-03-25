import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Applyjob from './Component/Applyjob/Applyjob';
import ErrorPage from './Component/Errorpage/ErrorPage';
import JobDeatils from './Component/jobDeatils/JobDeatils';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<Applyjob></Applyjob>,
        loader:()=>fetch('/jobs.json')//only read load all data.load only data unity 
      },
      {
   path:'/job/:id',
   element:<JobDeatils></JobDeatils>,
   loader:()=> fetch('../jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
