import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  return (
    <div className="bg-black">
      <div className="md:relative z-10 lg:-mt-2 sm: ">
        <MovieList
        title={"Upcoming Movies"}
        movies={movies.upcoming_movies}
      />
      <MovieList
        title={"Top Rated Movies"}
        movies={movies.top_rated_movies}
      />
       <MovieList
        title={"Now Playing Movies"}
        movies={movies.now_playing_movies}
      />

      </div>
    </div>
  );
};

export default SecondaryContainer;

/*
        MovieList - Popular 
            Multiple Movie Cards 
        MovieList - Trending  
            Multiple Movie Cards 
        MovieList - Nowplaying 
            Multiple Movie Cards 
          .
          .
          .
          . 
      */
