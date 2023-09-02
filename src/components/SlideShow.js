import React from "react";
import MovieCard from "./MovieCard";

const SlideShow = ({ movies, text }) => {
    console.log(movies);
    if (!movies || !movies.length) return null;
    return (
        <div className="overflow-hidden">
            <p className="text-2xl text-white w-full m-2">{text}</p>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideShow;
