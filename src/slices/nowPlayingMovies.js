import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies = createSlice({
    name: "nowPlayingMovies",
    initialState: {
        nowPlayingMovies: [],
        upcomingMovies: [],
        topRatedMovies: [],
        popularMovies: [],
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
    },
});

export const {
    addMovies,
    addPopularMovies,
    addUpcomingMovies,
    addTopRatedMovies,
} = nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;
