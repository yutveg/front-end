import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import WorkoutCard from "./dataRelated/WorkoutCard";
import BodyDataCard from "./dataRelated/BodyDataCard";
function Dashboard(props) {
  const [workouts, setWorkouts] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${props.id}/journal`)
      .then((res) => {
        setWorkouts(res.data);
      })
      .catch((err) => console.log(err));
    axiosWithAuth()
      .get(`/users/${props.id}/info`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  return (
    <div>
      <div className="adduser-container">
        <Link to={`/addinfo`}>Add Body Weight Entry</Link>
      </div>
      <h1>Body Weight Entries</h1>
      {userData.map((entry) => (
        <BodyDataCard entry={entry} />
      ))}
      <h1>Exercise Entries</h1>
      {workouts.map((exercise) => (
        <div className="workout-container" key={exercise.id}>
          <WorkoutCard exercise={exercise} />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
