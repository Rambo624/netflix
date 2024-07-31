import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggetions from './GptSuggetions'
import { BG_URL } from '../Utils/url.js'


function Gpt() {
  return (
    <div >
      <div className='absolute -z-10'>
      <img  src={BG_URL} alt="" />
      </div>
    
      <GptSearchBar/>
      <GptSuggetions/>
     
    </div>
  )
}

export default Gpt