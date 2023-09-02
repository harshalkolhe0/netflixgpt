import React, { useState, useEffect } from "react";
import { nowPlayingMoviesAPI, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../slices/nowPlayingMovies";
const useGetNowPlayingMovies = () => {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const getMovies = async () => {
        const data = await fetch(nowPlayingMoviesAPI, options);
        const json = await data.json();
        //console.log("json", json);
        setMovies(json.results);
        dispatch(addMovies(json.results));
    };
    useEffect(() => {
        getMovies();
    }, []);
    return movies;
};

export default useGetNowPlayingMovies;
