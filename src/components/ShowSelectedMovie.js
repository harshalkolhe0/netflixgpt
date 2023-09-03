import React, { useEffect, useState } from "react";
import VideoDetails from "./VideoDetails";
import Header from "./Header";
import VideoBackground from "./VideoBackground";
import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../hooks/useGetMovieDetails";
const ShowSelectedMovie = () => {
    const { id } = useParams();
    const [f, setF] = useState(true);
    const movie = useGetMovieDetails(id);
    console.log("movie", movie);
    let p;
    useEffect(() => {
        if (f) clearTimeout(p);
        const div = document.getElementById("headersDiv");
        div.style.visibility = "visible";
        setTimeout(() => {
            div.style.visibility = "hidden";
            setF(false);
            p = div.addEventListener("mouseover", () => setF(true));
        }, 5000);
        return () => {
            clearTimeout(p);
        };
    }, [f]);
    if (!id) return null;
    return (
        movie && (
            <div className="z-10 w-full">
                <div className="w-full z-20" id="headersDiv">
                    <Header />
                </div>
                <VideoDetails movie={movie} />
                <VideoBackground id={movie?.id} />
                <div className="h-20 bg-black absolute -bottom-24 w-full z-20"></div>
            </div>
        )
    );
};

export default ShowSelectedMovie;
