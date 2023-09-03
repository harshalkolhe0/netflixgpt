import React, { useState } from "react";
import useGetTrailers from "../hooks/useGetTrailers";
const VideoBackground = ({ id }) => {
    const videoURL = useGetTrailers(id);
    if (!videoURL) return null;
    console.log("Video URL in bg", videoURL);
    return (
        videoURL?.key && (
            <div className="w-screen aspect-video absolute -top-20 -left-4 pointer-events-none">
                <iframe
                    className="w-screen aspect-video"
                    src={
                        "https://www.youtube.com/embed/" +
                        videoURL?.key +
                        "?autoplay=1&loop=1&playlist=" +
                        videoURL?.key +
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

export default React.memo(VideoBackground);
