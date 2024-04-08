import { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice(
    {
        name : "lang",
        initialState : {
            language : "english"
        },
        reducers : {
            changeLangauge : (state, action) => {
                state.language = action.payload;
            }
        }
    }
)

export default LangSlice.reducer;

export const {changeLangauge} = LangSlice.actions;