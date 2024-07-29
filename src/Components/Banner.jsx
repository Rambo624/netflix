import React from 'react'
import { useSelector } from 'react-redux'
import BannerTitle from './BannerTitle'
import BannerVideo from './BannerVideo'
function Banner() {

    const movies=useSelector(Store=>Store.movies?.nowPlayingMovies)
    if(movies===null) return
    const randomIndex = Math.floor(Math.random() * movies.length);
  
const mainMovie=movies[1]


  return (
    <div>
          <BannerTitle title={mainMovie.title} overview={mainMovie.overview}/>
        <BannerVideo id={mainMovie.id}/>
      
    </div>
  )
}

export default Banner