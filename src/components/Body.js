import React, { useEffect } from "react";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
const Body = () => {
    const res = useGetNowPlayingMovies();
    console.log("res", res);
    return (
        <div className="flex flex-wrap">
            <MainComponent />
            <SecondaryComponent />
        </div>
    );
};

export default Body;
