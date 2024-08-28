import React from 'react'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import BannerTitle from './BannerTitle'
import BannerVideo from './BannerVideo'
function Banner() {

    const movies=useSelector(Store=>Store.movies?.nowPlayingMovies)
    if(movies===null) return <h1>Loading....</h1>
 
    const mainMovie = useMemo(() => {
      if (!movies || movies.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    }, [movies]);
  
    if (!mainMovie) return null;

  return (
    <div>
          <BannerTitle title={mainMovie.title} overview={mainMovie.overview}/>
        <BannerVideo id={mainMovie.id}/>
      
    </div>
  )
}

export default Banner