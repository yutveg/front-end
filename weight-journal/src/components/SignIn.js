import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {axiosWithAuth} from '../utils/axiosWithAuth'

function SignIn({ errors, touched, status }) {
const [info, setInfo] = useState([]);
useEffect(() => {
    console.log("status has changed", status);
    status && setInfo( information => [...information, status])
},[status])

  return (
    <div className="form-container">
    <h1>Sign In</h1> 
    <Form>
        <label className="forms">
            <Field type="username" name="username" placeholder="Username" />
            {touched.username && errors.username && <p>{errors.username}</p>}
        </label>
        <label className="forms">
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
        </label>
        <button type="submit">Submit</button>
    </Form>

            {/* {info.map(information => (
            <ul key={information.id}>
                <li>Username: {information.username}</li>
                <li>Password: {information.password}</li>
            </ul>
            ))} */}
    </div>
    );
};

const FormikSignIn = withFormik({
    mapPropsToValues({ username, password, termsofservice }) {
        return {
            username: username || "",
            password: password || "",
            termsofservice: termsofservice || false,
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .required("Required Field"),
        password: Yup.string()
        .min(6, "Password must be 6 characters or longer")
        .required("Password is required"),
    }),

    handleSubmit(values, { setStatus, history }) {
    console.log("submitting", values);
    axiosWithAuth()
        .post('/auth/login', values)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            history.push('/dashboard')
        })
        .catch(err => setStatus(err))
  }
})(SignIn);

export default FormikSignIn;

