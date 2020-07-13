import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
const WorkoutCard = (props) => {
  const exercise = props.exercise;

  const handleEdit = (e) => {
    props.history.push(`/updateworkout/${e.target.id}`);
  };

  const handleDelete = (e) => {
    axiosWithAuth()
      .delete(`/users/${e.target.id}/entry`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="workout-card">
      <div className="workout-items">
        <p>
          <span>Exercise: </span>
          {exercise.workout}
        </p>
        <p>
          <span>Target Muscles: </span>
          {exercise.body_region}
        </p>
        <p>
          <span>Weight: </span>
          {exercise.weight}
        </p>
        <p>
          <span>Reps: </span>
          {exercise.reps}
        </p>
        <p>
          <span>Sets: </span>
          {exercise.sets}
        </p>
        <p>
          <span>Notes: </span>
          {exercise.notes}
        </p>
        <p>{exercise.created_at.slice(0, 10)}</p>
      </div>
      <div className="button-container">
        <button
          name="exercisedata"
          className="far fa-edit"
          id={exercise.id}
          onClick={handleEdit}
        />
        <button
          className="fas fa-trash-alt"
          id={exercise.id}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default WorkoutCard;
