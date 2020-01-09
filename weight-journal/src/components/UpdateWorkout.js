import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

import './UpdateWorkout.css'

const initialWorkout = {
    workout: '',
    body_region: '',
    sets: '',
    weight: '',
    reps: '',
    notes: ''
}

const UpdateWorkout = (props) => {
    const [ workout, setWorkout ] = useState(initialWorkout)
    console.log(workout)

    useEffect(() => {
        const workoutToEdit = props.workouts.find(
            e => `${e.id}` === props.match.params.id
        )
        console.log(props.workouts, workoutToEdit)
        if(workoutToEdit) {
            setWorkout(workoutToEdit)
        }
    }, [props.workouts, props.match.params.id])

    const handleChanges = e => {
        e.persist()
        let value = e.target.value
        if (e.target.name === 'sets') {
            value = parseInt(value, 10)
        }
        setWorkout({
            ...workout,
            [e.target.name]: value
        })
    }

    const handleSubmit = e => {
        console.log(workout)
        console.log(workout.id)
        e.preventDefault()
        let tempID = props.userid
        axiosWithAuth()
            .put(`/users/${workout.id}/entry`, workout)
            .then(response => {
                console.log("this is the response", response.data)
                props.setUserid(0)
                props.setUserid(tempID)
                props.history.push(`/dashboard`)
               
                
            })
            .catch(error => console.log('Data not returned(handleSubmit) UpdateWorkout.js', error))
    }

    return (
        <div>
            <h1>UpdateWorkout.js</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='workout' 
                    type='text' 
                    name='workout' 
                    value={workout.workout}
                    onChange={handleChanges}
                />
                <input 
                    placeholder='body region' 
                    type='text' 
                    name='body_region' 
                    value={workout.body_region}
                    onChange={handleChanges}
                />
                <input 
                    placeholder='sets' 
                    type='number' 
                    name='sets' 
                    value={workout.sets}
                    onChange={handleChanges}
                />
                <input 
                    placeholder='weight' 
                    type='text' 
                    name='weight' 
                    value={workout.weight}
                    onChange={handleChanges}
                />
                <input 
                    placeholder='reps' 
                    type='number' 
                    name='reps' 
                    value={workout.reps}
                    onChange={handleChanges}
                />
                <input 
                    placeholder='notes' 
                    type='text' 
                    name='notes' 
                    value={workout.notes}
                    onChange={handleChanges}
                />
                <button>Edit Workout</button>
            </form>
        </div>
    )
}

export default UpdateWorkout;