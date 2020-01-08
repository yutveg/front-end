import React, {useState } from "react";
import axios from "axios";

const SignUp = props => {
    const [info, setInfo] = useState({
      username: '',
      email: '',
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
      axios
        .post("https://weightliftingjournal1.herokuapp.com/api/auth/register", info)
        .then(response => {
          console.log("success", response);
          props.history.push('/signin')
        })
        .catch(error => console.log(error.response));
    }

    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label className="forms">
                <input id="name" type="text" name="username" placeholder="Username:" onChange={handleChanges} required/> 
            </label>
            <label className="forms">
                <input id="email" type="text" name="email" placeholder="Email:" onChange={handleChanges} required/>
            </label>
            <label className="forms">
                <input id="password" type="text" name="password" placeholder="Password:" onChange={handleChanges} required/> 
            </label>
            <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    );
  };

export default SignUp;




