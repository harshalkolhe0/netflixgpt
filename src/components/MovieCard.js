import React from "react";
import { Image_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const poster = movie.poster_path;
    return (
        <Link to={"/browse/" + movie.id}>
            <div className="w-40 h-48 m-3">
                <img src={Image_URL + poster} alt="image" />
            </div>
        </Link>
    );
};

export default MovieCard;
