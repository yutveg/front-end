import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom';

function Dashboard(props) {
    const [workout, setWorkout] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        axiosWithAuth()
        .get(`users/${props.match.params.id}/journal`)
        .then(res => {
            console.log(res.data)
            setWorkout(res.data)
        })
        .catch(err => console.log(err))
    },[]) 

    const handleDelete = e => {
        console.log(e.target.id)
        axiosWithAuth()
        .delete(`/users/${e.target.id}/entry`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        axiosWithAuth()
        .get(`users/${props.match.params.id}/journal`)
        .then(res => {
            console.log(res.data)
            setWorkout(res.data)
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            {workout.map((workouts => (
                // <Workout workouts={workouts} />
                <div className="workout-container" key={workouts.id}>
                    <div className="workout-card">
                        <h2>Exercise: {workouts.workout}</h2>
                        <div className="workout-items">
                            <p>Target Muscles: {workouts.body_region}</p>
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