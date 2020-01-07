import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import './AddWorkout.css';
import UpdateWorkout from './UpdateWorkout';

const AddWorkout = () => {
	const [ workout, setWorkout ] = useState({
		name: '',
		weight: '',
		reps: ''
	});

	const handleChanges = (e) => {
		let value = e.target.value;
		setWorkout({
			...workout,
			[e.target.name]: value
		});
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        // axiosWithAuth()
        //     .post('link', workout)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => console.log("Data not returned AddWorkout.js", error))

		setWorkout({
			...workout,
			name: '',
			weight: '',
			reps: ''
		});
	};

	return (
		<div>
			<h1>AddWorkout.js</h1>
			<form className="addworkout-container" onSubmit={handleSubmit}>
				<input
					className="workout-input"
					placeholder="Workout Name"
					name="name"
					type="text"
					value={workout.name}
					onChange={handleChanges}
				/>
				<input
					className="workout-input"
					placeholder="Weight"
					name="weight"
					type="number"
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
				<button className="add-button">Add Workout</button>
			</form>
		</div>
	);
};

export default AddWorkout;
