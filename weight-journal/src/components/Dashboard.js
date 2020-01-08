import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useHistory, Route } from "react-router-dom";
import UpdateWorkout from './UpdateWorkout'

function Dashboard(props) {
  const [workouts, setWorkouts] = useState([]);

  const handleDelete = e => {
    console.log(e.target.id);
    axiosWithAuth()
      .delete(`/users/${e.target.id}/entry`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    axiosWithAuth()
      .get(`users/${props.userid}/journal`)
      .then(res => {
        console.log(res.data);
        props.setWorkout(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleEdit = e => {
    e.preventDefault();
    props.history.push(`/updateworkout/${e.target.id}`);
  };
  return (
    <div>
      <Link to={`/userinfo/${props.userid}`}>Add User Info</Link>
      {props.workouts.map(exercise => (
        // <Workout workouts={workouts} />
        <div className="workout-container" key={exercise.id}>
          <div className="workout-card">
            <div className="workout-items">
              <p><span>Exercise: </span>{exercise.workout}</p>
              <p><span>Target Muscles: </span> {exercise.body_region}</p>
              <p><span>Weight: </span>{exercise.weight}</p>
              <p><span>Reps: </span>{exercise.reps}</p>
            </div>
            <div className="button-container">
              <button className="workout-button" id={exercise.id} onClick={handleDelete}>
                Delete
              </button>
              <button className="workout-button" id={exercise.id} onClick={handleEdit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
