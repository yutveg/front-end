import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const AddUserData = props => {
  const [userInfo, setUserInfo] = useState({
    user_age: "",
    user_height: "",
    user_weight: ""
  });

  const handleChange = e => {
    e.persist()
    let value = e.target.value
    if(e.target.name === 'user_age'){
      value = parseInt(value, 10)
    }

    setUserInfo({
      ...userInfo,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInfo)
    console.log(props.userid)
    let tempID = props.userId
    axiosWithAuth()
      .post(`/users/${props.userid}/info`, userInfo)
      .then(res => {
        console.log(res)
        props.setUserid(0)
        props.setUserid(tempID)
        props.history.push('/dashboard')
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="user-container">
      <h1>Update Your Info</h1>
      <div className="user-form-container">  
      <form className="user-form" onSubmit={handleSubmit}>
        <label>Age:</label>
        <input
          type="number"
          name="user_age"
          placeholder="Age.."
          onChange={handleChange}
          required
        />
        <label>Height:</label>
        <input
          type="text"
          name="user_height"
          placeholder="Height.."
          onChange={handleChange}
          required
        />
        <label>Weight:</label>
        <input
          type="text"
          name="user_weight"
          placeholder="Weight.."
          onChange={handleChange}
          required
        />
        <button className="user-button" type="submit">Submit</button>
      </form>
      </div>  
    </div>
  );
};

export default AddUserData;
