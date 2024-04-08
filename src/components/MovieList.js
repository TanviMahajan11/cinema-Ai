import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  //console.log("Movies");
  // console.log(movies);

  return (
    <div className="p-6" >
      <h1 className="text-white text-2xl font-bold py-4 bg-opacity-90">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex pr-2">
          {movies &&
            movies.map((movie) => <MovieCard  key = {movie.id} posterPath={movie.poster_path} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
