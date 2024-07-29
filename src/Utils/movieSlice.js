import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
addnowPlayingMovies:(state,action)=>{
    state.nowPlayingMovies= action.payload
}
    }
})

export default movieSlice.reducer

export const {addnowPlayingMovies}=movieSlice.actions