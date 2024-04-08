
import {API_options} from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  
  const dispatch = useDispatch();

  const Now_Playing_Movies = async ()  =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options);

      // convert data to json

      const JsonData = await data.json();
      // console.log("Now Playing");

      // console.log(JsonData.results);

      // adding the json now playing movies data to redux store so to do this we will dispatch an action 
      dispatch(addNowPlayingMovies(JsonData.results));
  }

  // just calling api once whenever the component rendered 
  useEffect( () =>{
    Now_Playing_Movies();
  }, []);
  
}

export default useNowPlayingMovies;