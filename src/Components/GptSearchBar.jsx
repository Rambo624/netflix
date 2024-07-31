import React from 'react'
import lang from '../Utils/languageConstant'
import { useSelector } from 'react-redux'

function GptSearchBar() {

const language=useSelector((Store)=>Store.config.lang)


  return (
    <div className='pt-36 flex justify-center '>
        <form className='bg-black p-2 w-1/2 grid grid-cols-12'>
            <input className='border ml-5 p-2 col-span-10' type="text" placeholder={lang[language].gptSearchPlaceholder} />
            <button className='bg-red-600 p-2 rounded-lg col-span-2 ml-2'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar