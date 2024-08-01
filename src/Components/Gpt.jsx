import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggetions from './GptSuggetions'
import { BG_URL } from '../Utils/url.js'


function Gpt() {
  return (
    <div >
      <div className='fixed -z-10'>
      <img className='h-screen object-cover md:h-auto'  src={BG_URL} alt="" />
      </div>
    
      <GptSearchBar/>
      <GptSuggetions/>
     
    </div>
  )
}

export default Gpt