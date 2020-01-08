import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './AddWorkout.css';

const AddWorkout = (props) => {
	const [ workout, setWorkout ] = useState({
		workout: '',
    	body_region: '',
    	sets: '',
    	weight: '',
    	reps: '',
    	notes: ''
	});

	const handleChanges = (e) => {
		let value = e.target.value;
        if(e.target.name === 'sets' || e.target.name === 'reps' ){
				value = parseInt(value, 10)
			}
		

		setWorkout({
			...workout,
			[e.target.name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(workout)
		console.log(props.userid)
		axiosWithAuth()
            .post(`/users/${props.userid}/journal`, workout)
            .then(response => {
				console.log(response)
				props.history.push('/dashboard');
            })
            .catch(error => console.log("Data not returned AddWorkout.js", error))

		setWorkout({
			...workout,
			username: '',
    		body_region: '',
    		sets: '',
    		weight: '',
    		reps: '',
    		notes: ''
		});
	};

	return (
		<div>
			<form className="addworkout-container" onSubmit={handleSubmit}>
			<h1>Add Exercises</h1>
				<input
					className="workout-input"
					placeholder="Workout Name"
					name="workout"
					type="text"
					value={workout.workout}
					onChange={handleChanges}
				/>
				<input
					className="workout-input"
					placeholder="Body Region"
					name="body_region"
					type="text"
					value={workout.body_region}
					onChange={handleChanges}
				/>
				<input
					className="workout-input"
					placeholder="Sets"
					name="sets"
					type="number"
					value={workout.sets}
					onChange={handleChanges}
				/>
				<input
					className="workout-input"
					placeholder="Weight"
					name="weight"
					type="text"
					value={workout.weight}
					onChange={handleChanges}
				/>
				<input
					className="workout-input"
					placeholder="Reps"
					name="reps"
					type="number"
					value={workout.reps}
					onChange={handleChanges}
				/>
				<input
					className="workout-input"
					placeholder="Notes"
					name="notes"
					type="text"
					value={workout.notes}
					onChange={handleChanges}
				/>
				<button className="add-button">Add Workout</button>
			</form>
		</div>
	);
};

export default AddWorkout;
