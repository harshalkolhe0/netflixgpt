import React from "react";
import useGetMovies from "../hooks/useGetMovies";
import {
    upcomingMoviesAPI,
    topRatedMoviesAPI,
    nowPlayingMoviesAPI,
    popularMovesAPI,
} from "../utils/constants";
import {
    addUpcomingMovies,
    addTopRatedMovies,
    addMovies,
    addPopularMovies,
} from "../slices/nowPlayingMovies";
import SlideShow from "./SlideShow";
const SecondaryComponent = () => {
    const upcomingMovies = useGetMovies(upcomingMoviesAPI, addUpcomingMovies);
    const topRatedMovies = useGetMovies(topRatedMoviesAPI, addTopRatedMovies);
    const nowPlayingMovies = useGetMovies(nowPlayingMoviesAPI, addMovies);
    const popularMoves = useGetMovies(popularMovesAPI, addPopularMovies);

    return (
        <div className="w-screen z-20 -mt-52 bg-gradient-to-b from-transparent to-black">
            <SlideShow movies={nowPlayingMovies} text={"Now Playing"} />
            <SlideShow movies={topRatedMovies} text={"Top Rated"} />
            <SlideShow movies={popularMoves} text={"Popular"} />
            <SlideShow movies={upcomingMovies} text={"Upcoming Movies"} />
        </div>
    );
};

export default SecondaryComponent;
