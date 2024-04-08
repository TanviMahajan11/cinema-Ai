import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Search from "./Search";
import { useSelector } from "react-redux";

const Browse = () => {

  const toggle = useSelector((store) => store.search.toggleSearch);
  console.log(toggle);

  // calling the now_playing movies api
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  
  return (
    <div>
      <Header />
      {toggle ? (
        <Search/>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

/*
     MainContainer 
        - VideoBackground 
        - Movie Title
    SecondaryContainer 
        - MovieList * n
            - Card * n
    */
