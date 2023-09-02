import { useState, useEffect } from "react";
import { options } from "../utils/constants";
const useGetMovieTrailers = (id) => {
    const [videoURL, setVideoURL] = useState();
    console.log("id", id);
    const getTrailersDetails = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos`,
            options
        );
        console.log("data", data);
        const json = await data.json();
        console.log("json", json);
        const trailersVideos = json?.results?.filter(
            (t) => t.type === "Trailer"
        );
        console.log("trailersVideos", trailersVideos);
        if (trailersVideos?.length) setVideoURL(trailersVideos[0]);
        else setVideoURL(json.result ? json.results[0] : null);
    };
    useEffect(() => {
        console.log("called");
        getTrailersDetails();
        console.log("call over");
    }, [id]);
    console.log("videoURL in trailer::", videoURL);
    return videoURL;
};
export default useGetMovieTrailers;
