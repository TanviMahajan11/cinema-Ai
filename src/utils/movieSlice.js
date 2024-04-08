import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        now_playing_movies : null,
        trailerVideo : null,
        top_rated_movies: null,
        upcoming_movies : null,
    },
    reducers :{
        addNowPlayingMovies: (state, action) => {
            state.now_playing_movies = action.payload;
        },

        addTopRatedMovies: (state , action) =>{
            state.top_rated_movies = action.payload;
        },

        addUpcomingMovies:(state, action) =>{
            state.upcoming_movies = action.payload;
        },

        addTrailer : (state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTopRatedMovies ,addUpcomingMovies ,addTrailer} = movieSlice.actions;
export default movieSlice.reducer;
