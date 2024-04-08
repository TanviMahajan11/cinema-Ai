import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from "./VideoBackground";
import ViedoTitle from './ViedoTitle';

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.now_playing_movies); 

  // BASICALLY THE STORE IS TAKING TIME TO LOAD data of movies and till that time if we access movies[0] then it will show error 
  if (movies == null) return ;

  const mainMovie = movies[0]; 
  console.log(mainMovie);

  const  {original_title , overview, id} = mainMovie;

  return (
    <div>
        { /* the title and video baground should overlap */}
            <ViedoTitle title = {original_title} overview = {overview}/>
            <VideoBackground  id ={id} />
            
    </div>
  )
}

export default MainContainer;