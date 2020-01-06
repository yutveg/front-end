import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

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
    );
  };

const FormikSignIn = withFormik({
    mapPropsToValues({ name, email, password, terms }){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
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



