import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {workoutdata} from "../workoutdata"

function Dashboard(props) {
    const [workout, setWorkout] = useState([]);
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
    }
    return(
        <div>
            <img className="dashboard-image"
            src='https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            alt="dashboard-img" />    
            <h1>Your Journal</h1>
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