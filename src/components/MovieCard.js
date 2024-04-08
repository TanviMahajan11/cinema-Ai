import React from 'react'
import {img_cdn} from "../utils/constants";

const MovieCard = ({posterPath}) => {

  // const movie = props;
  // console.log(movie);
  //console.log(img_cdn+posterPath);

  if(posterPath === null) return;

  return (
    <div className='w-40 p-1' >
      <img src = {img_cdn+posterPath} alt ="movie_poster" />
    </div>
  )
}

export default MovieCard