import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, genre }) {

  
  if (!genre) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <h1 className='text-white bg-black bg-opacity-40  '>{title}</h1>
      <div className='flex overflow-x-scroll hide-scrollbar bg-opacity-40 bg-black  ' >
        {genre.length > 0 ? (
          genre.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
            
          ))
        ) : (
          <div>No movies available</div>
        )}
      </div>
    </div>
  );
}

export default MovieList;
