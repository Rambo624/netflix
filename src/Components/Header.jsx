import React from 'react'
import { LOGO_URL } from '../Utils/url'
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
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
        <img className='w-8 h-8 mr-5 mt-6' src="
https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" />
        <button onClick={handleSignout} className='bg-black h-6 mt-6 cursor-pointer p-2 text-white mr-10 '>Log Out</button>
      </div>} 

    </div>

  )
}

export default Header