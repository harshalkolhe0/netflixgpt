import React from "react";
import { useSelector } from "react-redux";
import store from "../store";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { toastError } from "../utils/toast";
const Browse = () => {
    const user = useSelector((store) => store.persistedReducer.userSlice);
    if (!user || !user.accessToken) {
        toastError("Need login to access netflix");
        return <Login />;
    }
    console.log("user in browser", user);
    return (
        <div>
            <Header />
            <p>Browser</p>
        </div>
    );
};

export default Browse;
