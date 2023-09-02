import React, { useState, useEffect } from "react";
import { movie_url } from "../utils/constants";
import { options } from "../utils/constants";
export const useGetMovieDetails = (id) => {
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const data = await fetch(movie_url + id, options);
        const json = await data.json();
        //console.log(json);
        setMovie(json);
    };
    useEffect(() => {
        getMovie();
    }, [id]);
    return movie;
};
