import React from 'react'
import { LOGO_URL } from '../Utils/url'
function Header() {
  return (
    
        <div className='absolute w-[100%] py-2 bg-gradient-to-b from-black z-20'>
            <img className='w-32  m-5' src={LOGO_URL} alt="" />
        
    </div>
  )
}

export default Header