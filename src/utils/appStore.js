// Redux App Store 

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import searchReducer from "./SearchSlice";
import langaugeReducer from "./LangSlice";

// this store takes a configuration which will have reducer and this reducer will have diffrent reducers from different slices 
const appStore = configureStore({
        reducer : {
            user : userReducer,
            movies : moviesReducer, 
            search : searchReducer,
            miltilanguage : langaugeReducer,
        },
});

export default appStore;