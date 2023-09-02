import React from "react";
import MovieCard from "./MovieCard";

const SlideShow = ({ movies, text }) => {
    if (!movies || !movies.length) return null;
    return (
        <div className="h-full">
            <p className="text-2xl text-white w-full m-2">{text}</p>
            <div className="flex overflow-x-scroll no-scrollbar h-full">
                <div className="flex h-full">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideShow;
