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
                <div className="container" key={workouts.id}>
                    <h2>{workouts.name}</h2>
                    <p>{workouts.weight}</p>
                    <p>{workouts.reps}</p>
                </div>
            )))}
        </div>
    )
}

export default Dashboard