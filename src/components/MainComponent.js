import React from "react";
import VideoDetails from "./VideoDetails";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainComponent = () => {
    const movies = useSelector(
        (store) => store.nowPlayingMovies.nowPlayingMovies
    );
    if (!movies || movies.length == 0) return;
    const movie = movies[0];
    console.log("movie", movie);
    return (
        <div className="-z-20 w-screen h-screen">
            <VideoDetails movie={movie} />
            <VideoBackground id={movie.id} />
        </div>
    );
};

export default MainComponent;
