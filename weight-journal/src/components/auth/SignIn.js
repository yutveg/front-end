import React, { useState } from "react";
import axios from "axios";

function SignIn(props) {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://weightliftingjournal1.herokuapp.com/api/auth/login", info)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        props.setId(response.data.id);
        props.history.push("/dashboard");
      })
      .catch((error) => console.log("error", error.response));
  };

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label className="forms">
          <input
            id="name"
            type="text"
            name="username"
            placeholder="Username:"
            onChange={handleChanges}
            required
          />
        </label>
        <label className="forms">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password:"
            onChange={handleChanges}
            required
          />
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
