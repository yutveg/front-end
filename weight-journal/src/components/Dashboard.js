import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";

function Dashboard(props) {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${props.userid}/journal`)
      .then(res => {
        console.log(res.data);
        setWorkout(res.data);
      })
      .catch(err => console.log(err));
  }, []);

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
        setWorkout(res.data);
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
      {workout.map(workouts => (
        // <Workout workouts={workouts} />
        <div className="workout-container" key={workouts.id}>
          <div className="workout-card">
            <div className="workout-items">
              <p><span>Exercise:  {workouts.workout}</span></p>
              <p><span>Target Muscles: </span> {workouts.body_region}</p>
              <p><span>Weight: </span>{workouts.weight}</p>
              <p><span>Reps: </span>{workouts.reps}</p>
            </div>
            <div className="button-container">
              <button className="workout-button" id={workouts.id} onClick={handleDelete}>
                Edit
              </button>
              <button className="workout-button" id={workouts.id} onClick={handleEdit}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
