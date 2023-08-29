import * as yup from "yup";
const passwordConditions =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailCondtion =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter your email address")
        .matches(emailCondtion)
        .required("Required"),
    password: yup
        .string()
        .matches(passwordConditions, {
            message: "Please create a stronger password",
        })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match"),
});
