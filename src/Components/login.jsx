import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL } from '../Utils/url'
import { Link} from 'react-router-dom'
import { validateData } from '../Utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate=useNavigate()
    const [isSignIn,setisSignIn]= useState(true)
    const[errorMsg,setErrMsg]=useState(null)
const email=useRef(null)
const password=useRef(null)
const Name=useRef(null)

function handleSignIn(){
    setisSignIn(!isSignIn)
}

async function handleButton(){
 const message= validateData(email.current.value,password.current.value)
 console.log(email.current.value)
 console.log(password.current.value)
  setErrMsg(message)
  
  
  if(message) return

  //sign up and signin logic//
try {
    if (!isSignIn) {
      const userCredential = await createUserWithEmailAndPassword(
      
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      console.log(user);
      // Handle successful sign-up
    } else {
      // Handle sign-in logic here
      {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse")
          // ...
          console.log(user)
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = "user doesnt exist";
          setErrMsg(errorCode+" "+errorMessage)
        });
      }
      
    }
  } catch (error) {
    const errorMessage = error.message;
    setErrMsg(errorMessage);
    console.error('Error during sign-up:', error);
  }
}


  return (
    <div>
        <Header/>
        <div   >
            <img className='absolute'  src={BG_URL} alt="" />
            <div >
            <form onSubmit={(e)=>{e.preventDefault()}} className='bg-black bg-opacity-80  p-5 w-3/12 mx-auto left-0 right-0 absolute mt-56' >
                <h1 className='font-bold  text-white text-2xl'>{isSignIn?"Sign In":"Sign up"}</h1>
                {!isSignIn && < input ref={Name}  className='my-4 w-[80%] ml-9 p-2 rounded-lg  bg-gray-600 bg-opacity-70 text-white '  type="text" placeholder='Enter Full Name' />}
              
                <input ref={email}  className='my-4 w-[80%] ml-9 p-2 rounded-lg  bg-gray-600 bg-opacity-70 text-white' type="text" placeholder='Email or Mobile Number' /><br />
                <input ref={password}  autoComplete='user-name' className='my-4 w-[80%] ml-9 p-2 rounded-lg bg-gray-600 bg-opacity-70 text-white'  type="password" placeholder='Enter Password' /><br />
                <button onClick={handleButton} className='bg-red-600 text-white p-2 my-3 rounded-md w-[80%] ml-9'>{isSignIn?"Sign In":"Sign up"}</button>
                <p className='text-red-600 text-center mb-3'>{errorMsg}</p>
               {isSignIn?<p className='text-gray-400 ml-10'>New to Netflix? <Link onClick={handleSignIn} className='cursor-pointer text-white'>Sign up now</Link></p>:<p className='text-gray-400 ml-10'>Already have Account? <Link onClick={handleSignIn} className='cursor-pointer text-white'>Sign in</Link></p>}
               
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Login