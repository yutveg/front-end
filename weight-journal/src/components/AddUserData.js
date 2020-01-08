import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const AddUserData = props => {
  const [userInfo, setUserInfo] = useState({
    age: "",
    height: "",
    weight: ""
  });

  const userID = props.match.params.id;

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth
      .post(`/users/${userID}/info`, userInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <form>
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
    </form>
  );
};

export default AddUserData;
