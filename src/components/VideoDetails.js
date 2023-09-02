import React from "react";

const VideoDetails = ({ movie }) => {
    const title = movie.title;
    const overview = movie.overview;
    return (
        <div className="w-full">
            <div className="w-full ml-5 md:w-1/4 lg:ml-20 text-white absolute pt-40 z-20 h-screen">
                <p className="text-3xl font-semibold">{title}</p>
                <p className="my-4 py-4">{overview}</p>
            </div>
        </div>
    );
};

export default VideoDetails;
