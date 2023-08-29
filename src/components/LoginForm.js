import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { loginSchema } from "../schema/loginSchema";
const onSubmit = async (values, actions) => {
    console.log("values", values);
    console.log("actions", actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};
const LoginForm = () => {
    const [login, setLogin] = useState(true);
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: loginSchema,
        onSubmit,
    });
    //console.log(login);
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full m-4 p-12 bg-black bg-opacity-75"
        >
            {login ? (
                <label className=" my-4 mx-2 py-4 font-semibold text-3xl text-white ">
                    Sign In
                </label>
            ) : (
                <label className=" my-4 mx-2 py-4 font-semibold text-3xl text-white ">
                    Sign In
                </label>
            )}
            {errors.email && touched.email && (
                <p className="m-2 text-red-700">{errors.email}</p>
            )}
            <input
                type="text"
                placeholder="Email"
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className="my-2 mx-2 p-4 rounded-md text-white bg-slate-900 bg-opacity-50"
            />
            {errors.password && touched.password && (
                <p className="m-2 text-red-700">{errors.password}</p>
            )}
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="my-2 mx-2 p-4 rounded-md text-white bg-slate-900 bg-opacity-50"
            />
            {!login && errors.confirmPassword && touched.confirmPassword && (
                <p className="m-2 text-red-700">{errors.confirmPassword}</p>
            )}
            {!login && (
                <input
                    type="password"
                    name="confirmPassword"
                    value={login ? values.password : values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Confirm password"
                    className="my-2 mx-2 p-4 rounded-md text-white bg-slate-900 bg-opacity-50"
                />
            )}
            <button
                type="submit"
                className="cursor-pointer bg-[#FF0000] text-white font-semibold mx-2 mt-10 mb-2 p-4 rounded-md"
            >
                {login ? "Sign In" : "Sign Up"}
            </button>
            <div
                className="text-white m-2 cursor-pointer"
                onClick={() => {
                    setLogin(!login);
                }}
            >
                {!login ? (
                    <span>Already signed up, Sign In</span>
                ) : (
                    <span>New member, Sign Up</span>
                )}
            </div>
        </form>
    );
};

export default LoginForm;
