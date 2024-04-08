import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const MovieRecomendation = () => {
  const moviesList = useSelector((store) => store.search);
  const { recomendedMovieNames, recomendedMovies } = moviesList;

  if (recomendedMovieNames === null) 
  {
     return <div style={{ minHeight: '100vh' }}></div>; // Return an empty div covering the whole page
  }
 

  return (
    <div className='text-white bg-black mt-10 m-5 bg-opacity-10'>
      <div className="text-white bg-black mt-10 bg-opacity-50">
        {recomendedMovieNames.map((movie, index) => (
          <div key={index}>
            <MovieList movies={recomendedMovies[index]} title={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRecomendation;
