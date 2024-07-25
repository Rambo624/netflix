import React from 'react'
import Header from './Header'
import { BG_URL } from '../Utils/url'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './login'
import Browse from './Browse'
import App from '../App'
function Body() {

const appRouter=createBrowserRouter([
 
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
])


  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body