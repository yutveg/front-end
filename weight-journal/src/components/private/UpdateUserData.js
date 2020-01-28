import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialData = {
  user_age: "",
  user_height: "",
  user_weight: ""
};

const UpdateUserData = props => {
  const [userData, setUserData] = useState(initialData);

  useEffect(() => {
    console.log("this is props.userData", props.userData);
    const dataToEdit = props.userData.find(
      e => `${e.id}` === props.match.params.id
    );
    if (dataToEdit) {
      setUserData(dataToEdit);
    }
  }, [props.userData, props.match.params.id]);

  const handleChanges = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    setUserData({
      ...userData,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("this is what we sent to the put", userData);
    console.log(userData.id);
    let tempID = props.userid;
    axiosWithAuth()
      .put(`/users/${userData.id}/info`, {
        user_age: userData.user_age,
        user_height: userData.user_height,
        user_weight: userData.user_weight
      })
      .then(response => {
        console.log("this is the response", response.data);
        props.setUserid(tempID);
        props.history.push(`/dashboard`);
      })
      .catch(error =>
        console.log("Data not returned(handleSubmit) UpdateWorkout.js", error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Age:</label>
      <input
        type="number"
        name="user_age"
        value={userData.user_age}
        onChange={handleChanges}
      />
      <label>Height:</label>
      <input
        type="text"
        name="user_height"
        value={userData.user_height}
        onChange={handleChanges}
      />
      <label>Weight:</label>
      <input
        type="text"
        name="user_weight"
        value={userData.user_weight}
        onChange={handleChanges}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateUserData;
