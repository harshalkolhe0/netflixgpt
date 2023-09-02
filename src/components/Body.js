import React, { useEffect } from "react";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
const Body = () => {
    const res = useGetNowPlayingMovies();
    return (
        <div className="flex flex-wrap bg-black absolute -z-20">
            <MainComponent />
            <SecondaryComponent />
        </div>
    );
};

export default Body;
