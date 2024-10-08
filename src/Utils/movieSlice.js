import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        UpcomingMovies:null
    },
    reducers:{
addnowPlayingMovies:(state,action)=>{
    state.nowPlayingMovies= action.payload
},
addPopularMovies:(state,action)=>{
    state.popularMovies= action.payload
},
addTopRatedMovies:(state,action)=>{
    state.topRatedMovies= action.payload
},
addUpcomingMovies:(state,action)=>{
    state.UpcomingMovies= action.payload
}

    }
   
})

export default movieSlice.reducer

export const {addnowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions