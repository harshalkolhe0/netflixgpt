import React from "react";
import { Image_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
    const poster = movie.poster_path;
    return (
        <div className="m-2 w-28 h-48">
            <img src={Image_URL + poster} alt="image" />
        </div>
    );
};

export default MovieCard;
