import React, { useEffect, } from 'react'
import Header from './Header'
import { BG_URL } from '../Utils/url'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './login'
import Browse from './Browse'
import { auth } from '../Utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import {useDispatch} from "react-redux"
import { addListener } from '@reduxjs/toolkit'
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

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
    
      const {uid,displayName,email} = user;
      dispatch(addUser({uid:uid,displayName:displayName,email:email})) 
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser())


    }
  });
},[])


  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body