import React from "react";
import { useEffect, useState, useRef } from "react";
import { options } from "../utils/constants";
const VideoBackground = ({ id }) => {
    const videoURL = useRef();
    const getMovieDetails = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US'`,
            options
        );
        const json = await data.json();
        //console.log(json);
        const trailersVideos = json.results.filter(
            (t) => t.type === "trailers"
        );
        if (trailersVideos.length) videoURL.current = trailersVideos[0];
        else videoURL.current = json.results[0];
        console.log("Current", videoURL.current);
    };
    useEffect(() => {
        getMovieDetails();
    }, []);
    return (
        videoURL.current?.key && (
            <div className="w-screen aspect-video absolute -top-32 -left-4">
                <iframe
                    className="w-screen aspect-video"
                    src={
                        "https://www.youtube.com/embed/" +
                        videoURL.current.key +
                        "?autoplay=1&loop=1&playlist=" +
                        videoURL.current.key +
                        "&enablejsapi=1"
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        )
    );
};

export default VideoBackground;
