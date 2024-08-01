import React from 'react'
import lang from '../Utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openAI from '../Utils/OpenAI'
import { options } from '../Utils/url'
import { addMovieResults } from '../Utils/GptSlice'
function GptSearchBar() {
const dispatch=useDispatch()
const language=useSelector((Store)=>Store.config.lang)
const searchText=useRef(null)


async function handleSearchButton(){
  const gptQuery=`act as a movie recommendation system.${searchText.current.value }.just show only 5 movie names. eg: Drishyam, oppam, premam, premalu, deadpool`
  const GptResults = await openAI.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
 console.log(GptResults?.choices[0]?.message)
 const gptMovies=GptResults?.choices[0]?.message?.content.split("\n")
 const gptResults = gptMovies?.map(item => item.split('. ')[1]);
 console.log(gptResults)

 const promiseArray=gptResults.map((movie)=> SearchTMDB(movie))
 const gptmovieResults=await Promise.all(promiseArray)
 dispatch(addMovieResults({movieNames:gptResults,movieResults:gptmovieResults}))
 console.log(gptmovieResults)
}


async function SearchTMDB(movie){
  const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,options)
  const json= await data.json()
  return json.results
}


  return (
    <div className='pt-36 flex justify-center '>
        <form className='bg-black p-2 mt-14 md:mt-0 mx-4 md:mx-0  md:w-1/2 grid grid-cols-12 rounded-lg mb-5' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='border ml-5 p-2 col-span-10 rounded-lg' type="text" placeholder={lang[language].gptSearchPlaceholder} />
            <button onClick={handleSearchButton} className='bg-red-600 p-2 rounded-lg col-span-2 ml-2'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar