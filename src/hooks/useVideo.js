import { API_options } from "../utils/constants";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

// fetching the trailer video and updating the store with trailer 
const useVideo = (movieId) => {
     
     // to maintain the traiderid we have 2 options 1) we can use state varibale or we can dirctly put trailer into store 
   const [trailerId , setTrailer] = useState(null);
   const dispatch = useDispatch();

   const checkTrailerAlreaYprsent = useSelector((store) => store.movies.trailerVideo);
  
  // fectch for the movie
  const fetchVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_options
    );
    const jsondata = await data.json();
    //console.log(jsondata);

    const trailer = jsondata.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    if (trailer.length === 0) trailer = jsondata.results[0];

    // Trailer will have a youtube video key
    //console.log("Trailer --");
    //console.log(trailer[0].key);
    
    setTrailer(trailer[0].key);
    //console.log(trailerId);
    dispatch(addTrailer(trailer[0].key));

  };


  useEffect(() => {
    // if trailer video is not present then only make an API CALL ( MEMOIZATION )
    !checkTrailerAlreaYprsent && fetchVideo();
  }, []);

}

export default useVideo;