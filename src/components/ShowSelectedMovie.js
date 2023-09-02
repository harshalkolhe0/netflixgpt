import React from "react";
import VideoDetails from "./VideoDetails";
import Header from "./Header";
import VideoBackground from "./VideoBackground";
import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../hooks/useGetMovieDetails";
const ShowSelectedMovie = () => {
    const { id } = useParams();
    const movie = useGetMovieDetails(id);
    console.log("movie", movie);
    if (!id) return null;
    return (
        movie && (
            <div className="z-10">
                <Header />
                <VideoDetails movie={movie} />
                <VideoBackground id={movie?.id} />
                <div className="h-20 bg-black absolute -bottom-10 w-full z-20"></div>
            </div>
        )
    );
};

export default ShowSelectedMovie;
