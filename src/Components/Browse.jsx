import React from 'react'
import usePopularMovies from '../hooks/usePopularMovies'
import Header from './Header'
import useNowPlayingMovies from '../hooks/usenowPlayingMovies'
import Banner from './Banner'
import Cards from './Cards'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
function Browse() {

useNowPlayingMovies()
usePopularMovies()
useTopRatedMovies()
useUpcomingMovies()
  return (
    
    <div>
        <Header/>
<Banner/>
<Cards/>
    </div>
  )
}

export default Browse