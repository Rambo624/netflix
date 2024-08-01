import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function GptSuggetions() {
  const gpt=useSelector((store)=>store.gpt)
  const {movieResults,movieNames}=gpt
  if(!movieNames)return <h1>Loading....</h1>
  return (
    <div className='bg-black text-white bg-opacity-80 m-2'>
    {movieNames.map((moviename,index)=>  <MovieList key={moviename} title={moviename} genre={movieResults[index]}/>)}
 
    </div>
  )
}

export default GptSuggetions