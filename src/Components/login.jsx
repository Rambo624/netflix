import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../Utils/url'
import { Link } from 'react-router-dom'

function Login() {
    const [isSignIn,setisSignIn]= useState(true)

function handleSignIn(){
    setisSignIn(!isSignIn)
}

  return (
    <div>
        <Header/>
        <div   >
            <img className='absolute'  src={BG_URL} alt="" />
            <div >
            <form className='bg-black bg-opacity-80  p-5 w-3/12 mx-auto left-0 right-0 absolute mt-56' >
                <h1 className='font-bold  text-white text-2xl'>{isSignIn?"Sign In":"Sign up"}</h1>
                {!isSignIn && < input  className='my-4 w-[80%] ml-9 p-2 rounded-lg  bg-gray-600 bg-opacity-70 '  type="text" placeholder='Enter Full Name' />}
              
                <input className='my-4 w-[80%] ml-9 p-2 rounded-lg  bg-gray-600 bg-opacity-70 ' type="text" placeholder='Email or Mobile Number' /><br />
                <input className='my-4 w-[80%] ml-9 p-2 rounded-lg bg-gray-600 bg-opacity-70'  type="password" placeholder='Enter Password' /><br />
                <button className='bg-red-600 text-white p-2 my-3 rounded-md w-[80%] ml-9'>{isSignIn?"Sign In":"Sign up"}</button>
               <p className='text-gray-400 ml-10'>New to Netflix? <Link onClick={handleSignIn} className='cursor-pointer text-white'>Sign up now</Link></p>
               
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Login