import React, {useState } from "react";
import {axiosWithAuth} from '../../utils/axiosWithAuth'

function SignIn(props) {
const [info, setInfo] = useState({
    username: '',
    password: ''
});
  
  const handleChanges = e => {
      setInfo({
        ...info,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting", info);
    axiosWithAuth()
      .post("https://weightliftingjournal1.herokuapp.com/api/auth/login", info)
      .then(response => {
        console.log("success", response);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userid', response.data.id)
        props.setUserid(response.data.id)
        props.history.push('/dashboard')
      })
      .catch(error => console.log(error.response));
  }

  return (
    <div className="form-container">
    <h1>Sign In</h1> 
    <form onSubmit={handleSubmit}>
            <label className="forms">
                <input id="name" type="text" name="username" placeholder="Username:" onChange={handleChanges} required/> 
            </label>
            <label className="forms">
                <input id="password" type="password" name="password" placeholder="Password:" onChange={handleChanges} required/> 
            </label>
            <button className="submit-button" type="submit">Submit</button>
        </form>
    </div>
    );
};

export default SignIn;

