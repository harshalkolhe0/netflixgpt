import React from "react";
import Logo from "./Logo";
import LoginForm from "./LoginForm";
import Header from "./Header";
import { useSelector } from "react-redux";
import Browse from "./Browse";
const Login = () => {
    const user = useSelector((store) => store.persistedReducer.userSlice);
    if (user && user.accessToken) {
        return <Browse />;
    }
    return (
        <div>
            <Header />
            <div className="brightness-50">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="bg image"
                    className="max-w-none"
                />
            </div>
            <div className="flex justify-center w-full md:w-1/2 lg:w-2/5 absolute left-1/3 top-20">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
