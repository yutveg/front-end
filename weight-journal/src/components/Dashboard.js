import React, {useState, useEffect} from "react";
// import axios from "axios";
import {workoutdata} from "../workoutdata"

function Dashboard() {
    const [workout, setWorkout] = useState([]);
    useEffect(() => {
        setWorkout(workoutdata)
    //     axios.get("").then(response => (console.log("success", response))).catch(error =>(console.log("error", error)))
    },[]) 
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
                        </div>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default Dashboard