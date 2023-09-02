import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoDetails from "./VideoDetails";
const MainComponent = () => {
    const movies = useSelector(
        (store) => store.nowPlayingMovies.nowPlayingMovies
    );
    if (!movies || movies.length == 0) return;
    const movie = movies[0];
    return (
        <div className="-z-20 w-screen h-screen">
            <VideoDetails movie={movie} />
            <VideoBackground id={movie.id} />
        </div>
    );
};

export default MainComponent;
