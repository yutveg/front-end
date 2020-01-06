import React, {useState, useEffect} from "react";
<<<<<<< HEAD
import { withFormik, Form, Field } from "formik";
import { Redirect } from 'react-router-dom'
=======
import {withFormik, Form, Field} from "formik";
>>>>>>> afc28e7933ddc9e83148bf8a8f4d40adfac9dc9e
import * as Yup from "yup";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'

<<<<<<< HEAD
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
=======
const SignIn = ({ values, errors, touched, status }) => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
      console.log("status has changed");
      status && setInfo(info => [...info, status]);
    }, [status]);
    return (
      <div className="new-form">
        <Form>
            <div>
                <Field id="name" type="text" name="name" placeholder="Name:"/> 
                {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
            </div>
            <div>
                <Field id="email" type="text" name="email" placeholder="Email:"/>
                {touched.email && errors.email && (<p className email="errors">{errors.email}</p>)}
            </div>
            <div>
                <Field id="password" type="text" name="password" placeholder="Password:"/>
                {touched.password && errors.password && (<p className password="errors">{errors.password}</p>)}
            </div>
          
            <label className="checkbox-container" htmlFor="terms">
                <Field id="terms" type="checkbox" name="terms" check={values.terms}/>
                {touched.terms && errors.terms && (<p className terms="errors">{errors.terms}</p>)}
            </label>
            <button>Submit</button>
        </Form>
        {info.map(information => (
          <div key={information.id}>
            <p>Name: {information.name}</p>
            <p>Email: {information.email}</p>
            <p>Password: {information.password}</p>
            <p>Accepted Terms</p>
          </div>
        ))}
      </div>
>>>>>>> afc28e7933ddc9e83148bf8a8f4d40adfac9dc9e
    );
  };

const FormikSignIn = withFormik({
    mapPropsToValues({ name, email, password, terms }){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
<<<<<<< HEAD
            termsofservice: termsofservice || false
=======
            terms: terms || false
>>>>>>> afc28e7933ddc9e83148bf8a8f4d40adfac9dc9e
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Required Field"),
        email: Yup.string().required("Required Field"),
        password: Yup.string().required("Required Field"),
        terms: Yup.boolean().oneOf([true], "Must Accept Terms")
      }),
      handleSubmit(values, { setStatus, resetForm }) {
        console.log("submitting", values);
        axios
          .post("https://reqres.in/api/users", values)
          .then(response => {
            console.log("success", response);
            setStatus(response.data);
            resetForm();
          })
          .catch(error => console.log(error.response));
      }
})(SignIn);

export default FormikSignIn


<<<<<<< HEAD
    handleSubmit(values, { setStatus, setSubmitting, history }) {
    console.log("submitting", values);
    axiosWithAuth()
    .post('/auth/register', values)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        setSubmitting(false)
        history.push('/dashboard')
    })
    .catch(err => setStatus(err))
  }
})(SignUp);
=======
>>>>>>> afc28e7933ddc9e83148bf8a8f4d40adfac9dc9e

