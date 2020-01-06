import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function SignIn({ values, errors, touched, status }) {
const [info, setInfo] = useState([]);
useEffect(() => {
    console.log("status has changed", status);
    status && setInfo( information => [...information, status])
},[status])
  return (
    <div className="form-container">
    <Form>
        <div>
            <Field type="username" name="username" placeholder="Username" value={values.username}/>
            {touched.username && errors.username && <p>{errors.name}</p>}
        </div>
        <div>
            <Field type="password" name="password" placeholder="Password" value={values.password}/>
            {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        <button>Submit</button>
    </Form>

    {info.map(information => (
	  <ul key={information.id}>
	    <li>Username: {information.username}</li>
	    <li>Password: {information.password}</li>
	  </ul>
	))}
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
        name: Yup.string()
        .required("Required Field"),
        password: Yup.string()
        .min(6, "Password must be 6 characters or longer")
        .required("Password is required"),
    }),

    handleSubmit(values, { setStatus }) {
    console.log("submitting", values);
    axios
    .post("https://regres.in/api/users/")
    .then(response => {
        console.log("success", response)
        setStatus(response.data)
    .catch(error => {
        console.log("error", error)
    })
    })
  }
})(SignIn);

export default FormikSignIn;

