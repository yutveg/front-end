import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

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
        props.setWorkouts(res.data);
        props.setUserid(props.userid)
      })
      .catch(err => console.log(err));
  };

  const handleEdit = e => {
    e.preventDefault();
    props.history.push(`/updateworkout/${e.target.id}`);
  };
  return (
    <div>
      <div className="adduser-container">
        <Link to={`/addinfo`}>Add Body Info</Link>
      </div>
      {props.workouts.map(exercise => (
        // <Workout workouts={workouts} />
        <div className="workout-container" key={exercise.id}>
          <div className="workout-card">
            <div className="workout-items">
              <p><span>Exercise: </span>{exercise.workout}</p>
              <p><span>Target Muscles: </span>{exercise.body_region}</p>
              <p><span>Weight: </span>{exercise.weight}</p>
              <p><span>Reps: </span>{exercise.reps}</p>
              <p><span>Sets: </span>{exercise.sets}</p>
              <p><span>Notes: </span>{exercise.notes}</p>
            </div>
            <div className="button-container">
              <button class="far fa-edit" id={exercise.id} onClick={handleEdit}/>
              <button class="fas fa-trash-alt" id={exercise.id} onClick={handleDelete}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
