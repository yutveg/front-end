import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'

function SignUp({ values, errors, touched, status }) {
const [info, setInfo] = useState([]);
useEffect(() => {
    console.log("status has changed", status);
    status && setInfo( information => [...information, status])
},[status])
  return (
    <div className="form-container">
    <Form>
        <div>
            <Field type="username" name="username" placeholder="Username"/>
            {touched.username && errors.username && <p>{errors.name}</p>}
        </div>
        <div>
            <Field type="email" name="email" placeholder="Email"/>
            {touched.username && errors.username && <p>{errors.email}</p>}
        </div>
        <div>
            <Field type="password" name="password" placeholder="Password"/>
            {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        <label className="checkbox-container">
            Accept Terms of Service?
            <Field type="checkbox" name="termsofservice" checked={values.termsofservice} />
            <span className="checkmark" />
        </label>
        <button type="submit">Submit</button>
    </Form>

    {info.map(information => (
	  <ul key={information.id}>
	    <li>Username: {information.username}</li>
	    <li>Email: {information.email}</li>
	    <li>Password: {information.password}</li>
	  </ul>
	))}
    </div>
    );
};

const FormikSignUp = withFormik({
    mapPropsToValues({ username, email, password, termsofservice }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            termsofservice: termsofservice || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
        .required("Required Field"),
        email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
        password: Yup.string()
        .min(6, "Password must be 6 characters or longer")
        .required("Password is required"),
    }),

    handleSubmit(values, { setStatus }) {
    console.log("submitting", values);
    axiosWithAuth()
    .post('/signup', values)
    .then(res => setStatus(res))
    .catch(err => setStatus(err))
  }
})(SignUp);

export default FormikSignUp;