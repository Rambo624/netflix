import React from 'react'
import { POSTER_URL } from '../Utils/url'
function MovieCard(props) {
 
  return (
    <div className=' flex-none w-40 p-2'>
        <img className=' hover:scale-[1.2]'  src={POSTER_URL+props.poster} alt="" />
    </div>
  )
}

export default MovieCard