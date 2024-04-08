import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

// createSlice takes an object and this object takes a configuration which takes names 
const SearchSlice = createSlice(
    {
        name : "search",
        initialState : {
            toggleSearch : false ,
            recomendedMovieNames : null,
            recomendedMovies : null,
        },
        reducers : {

            toggleSearchView: (state) => {
                state.toggleSearch = !state.toggleSearch;
            },

            addSearchMovies : (state, action) =>{
                const {moviename , movieResults } = action.payload;

                state.recomendedMovies = movieResults;
                state.recomendedMovieNames = moviename;
            }

        },
    },
)

export default SearchSlice.reducer;
export const {toggleSearchView ,addSearchMovies} = SearchSlice.actions;