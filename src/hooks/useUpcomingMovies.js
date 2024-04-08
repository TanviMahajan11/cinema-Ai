import { useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {  addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options);


        const jsonData = await data.json();
        // console.log("Upcoming Movies ");
        // console.log(jsonData.results);


        dispatch(addUpcomingMovies(jsonData?.results));
    };

    useEffect(()=>{
        getUpcomingMovies();
    },[]);
  
}

export default useUpcomingMovies;