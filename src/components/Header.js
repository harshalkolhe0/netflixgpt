import React from "react";
import { useDispatch, useSelector } from "react-redux";
import profile from "../images/profile.png";
import Logo from "./Logo";
import { removeUser } from "../slices/userSlice";
import { toastSuccess } from "../utils/toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
const Header = () => {
    const user = useSelector((store) => store.persistedReducer.userSlice);
    const un = user?.email?.substring(0, user.email.indexOf("@"));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="absolute top-0 left-0 z-20 w-full">
            <div className="flex justify-between">
                <div className="h-6 w-52 brightness-110 ">
                    <Logo />
                </div>
                <div className="flex m-2">
                    {un && (
                        <>
                            <div className="h-10 w-10 m-2">
                                <img
                                    className="object-cover"
                                    src={profile}
                                    alt="profile"
                                />
                            </div>
                            <div className="my-4">
                                <input
                                    type="button"
                                    className="cursor-pointer text-white"
                                    value="Sign out"
                                    onClick={() => {
                                        signOut(auth)
                                            .then(() => {
                                                // Sign-out successful.
                                            })
                                            .catch((error) => {
                                                // An error happened.
                                            });
                                        dispatch(removeUser());
                                        toastSuccess(
                                            "You have been signed out"
                                        );
                                        navigate("/");
                                    }}
                                ></input>
                                {/* <p>{un.substring(0, 5)}</p> */}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
