import React, { useState, useEffect } from 'react';
import axios from 'axios'

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

    const handleChanges = e => {
        let value = e.target.value
        setWorkout({
            ...workout,
            [e.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
            axios('')
            console.log(workout)
            .put(`link`, workout)
            .then(response => {
                
            })
            .catch(error => console.log('data not returned. UpdateWorkout.js'))
    }

    return (
        <div>
            <h1>UpdateWorkout.js</h1>
            <form>
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
                    type='number' 
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