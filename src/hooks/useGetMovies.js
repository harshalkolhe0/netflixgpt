import React, { useState, useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../slices/nowPlayingMovies";
const useGetMovies = (url, action) => {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const getMovies = async () => {
        const data = await fetch(url, options);
        const json = await data.json();
        //console.log(json);
        setMovies(json.results);
        dispatch(action(json.results));
    };
    useEffect(() => {
        getMovies();
    }, []);
    return movies;
};

export default useGetMovies;
