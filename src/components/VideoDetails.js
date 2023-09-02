import React from "react";

const VideoDetails = ({ movie }) => {
    const title = movie?.title;
    const overview = movie?.overview;
    console.log(title);
    return (
        <div className="w-full">
            <div className="w-full ml-5 md:w-1/4 lg:ml-20 text-white absolute pt-40 z-20 h-screen">
                <p className="text-3xl font-semibold">{title}</p>
                <p className="my-1 py-1">
                    {overview?.length > 250
                        ? overview?.slice(0, 240) + "..."
                        : overview}
                </p>
                <button
                    className=" py-2 px-4 bg-slate-200 text-xl text-black rounded-md opacity-60 hover:opacity-100"
                    onClick={() => {
                        //console.log("Button Clicked");
                    }}
                >
                    Play
                </button>
            </div>
        </div>
    );
};

export default VideoDetails;
