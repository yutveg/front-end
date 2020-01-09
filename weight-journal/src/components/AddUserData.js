import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const AddUserData = props => {
  const [userInfo, setUserInfo] = useState({
    age: "",
    height: "",
    weight: ""
  });

  const handleChange = e => {
    let value = e.target.value
    if(e.target.name === 'age'){
      e.target.value = parseInt(e.target.value, 10)
    }

    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInfo)
    axiosWithAuth()
      .post(`/users/${props.userid}/info`, userInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Age:</label>
      <input
        type="number"
        placeholder="Age.."
        onChange={handleChange}
        required
      />
      <label>Height:</label>
      <input
        type="text"
        placeholder="Height.."
        onChange={handleChange}
        required
      />
      <label>Weight:</label>
      <input
        type="text"
        placeholder="Weight.."
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUserData;
