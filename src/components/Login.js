import React from "react";
import Logo from "./Logo";
import LoginForm from "./LoginForm";
import Header from "./Header";
import { useSelector } from "react-redux";
import Browse from "./Browse";
import { bgImage } from "../utils/constants";
const Login = () => {
    const user = useSelector((store) => store.persistedReducer.userSlice);
    if (user && user.accessToken) {
        return <Browse />;
    }
    return (
        <div>
            <Header />
            <div className="brightness-50">
                <img src={bgImage} alt="bg image" className="max-w-none" />
            </div>
            <div className="flex justify-center w-full md:w-1/2 lg:w-2/5 absolute left-1/3 top-20">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
