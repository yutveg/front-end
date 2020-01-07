import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {workoutdata} from "../workoutdata"

function Dashboard(props) {
    const [workout, setWorkout] = useState([]);
    useEffect(() => {
        setWorkout(workoutdata)
        axiosWithAuth()
        .get(`users/${props.match.params.id}/journal`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[]) 
    const handleDelete = e => {
        console.log(e.target.id)
        axiosWithAuth().delete()
    }
    return(
        <div>
            {workout.map((workouts => (
                // <Workout workouts={workouts} />
                <div className="workout-container" key={workouts.id}>
                    <div className="workout-card">
                        <h2>Exercise: {workouts.name}</h2>
                        <div className="workout-items">
                            <p>Weight: {workouts.weight}</p>
                            <p>Reps: {workouts.reps}</p>
                            <button id={workouts.id} onClick={handleDelete}>X</button>
                        </div>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default Dashboard