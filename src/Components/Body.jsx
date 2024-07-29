import React, { useEffect, } from 'react'
import Header from './Header'
import { BG_URL } from '../Utils/url'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './login'
import Browse from './Browse'

import {useDispatch} from "react-redux"

import { addUser, removeUser } from '../Utils/userSlice'
function Body() {

const dispatch= useDispatch()

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