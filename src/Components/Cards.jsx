import React from 'react'


import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function Cards() {

  const movies = useSelector((Store) => Store.movies)



  return (
    <div>

      <div>
        <MovieList title={"Now Playing"} genre={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} genre={movies.UpcomingMovies} />
        <MovieList title={"Popular"} genre={movies.popularMovies} />
        <MovieList title={"Top Rated"} genre={movies.topRatedMovies} />
      

      </div>
    </div>
  )
}

export default Cards