import React from 'react'
import { LOGO_URL } from '../Utils/url'
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
function Header() {
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
const dispatch=useDispatch()


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid,displayName,email,photoURL} = user;
        dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL})) 
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
  navigate("/")
  
      }
    });
  },[])
  



function handleSignout(){

  signOut(auth).then(() => {
    navigate("/")
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
}

  return (

    <div className='absolute w-[100%] py-2 bg-gradient-to-b from-black z-20 flex justify-between '>
      <img className='w-32  m-5' src={LOGO_URL} alt="" />
     {user && <div className='flex'>
        <img className='w-8 h-8 mr-5 mt-6' src={user.photoURL} alt="" />
        <button onClick={handleSignout} className='bg-black h-6 mt-6 cursor-pointer p-2 text-white mr-10 '>{user.displayName}</button>
      </div>} 

    </div>

  )
}

export default Header