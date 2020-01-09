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
        if(e.target.name === 'sets' || e.target.name === 'reps' || e.target.name === 'weight'){
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
				axiosWithAuth().get(`/users/${props.userid}/journal`).then(res => {
					console.log(res)
					props.setWorkouts(res.data)
				}).catch(err => console.log(err))
            })
            .catch(error => {
				console.log("Data not returned AddWorkout.js", error)
				props.history.push('/dashboard')
			})
			props.setUserid(props.userid)

		setWorkout({
			...workout,
			workout: '',
    		body_region: '',
    		sets: '',
    		weight: '',
    		reps: '',
    		notes: ''
		});
	};

	return (
		<div className="add-container">
			<h1>Add Exercise</h1>
			<div className="add-form-container">
			<form className="add-form" onSubmit={handleSubmit}>
				<input
					className="workout-input"
					placeholder="Workout Name"
					name="workout"
					type="text"
					value={workout.workout}
					onChange={handleChanges}
					required
				/>
				<input
					className="workout-input"
					placeholder="Body Region"
					name="body_region"
					type="text"
					value={workout.body_region}
					onChange={handleChanges}
					required
				/>
				<input
					className="workout-input"
					placeholder="Sets"
					name="sets"
					type="number"
					value={workout.sets}
					onChange={handleChanges}
					required
				/>
				<input
					className="workout-input"
					placeholder="Weight"
					name="weight"
					type="number"
					value={workout.weight}
					onChange={handleChanges}
					required
				/>
				<input
					className="workout-input"
					placeholder="Reps"
					name="reps"
					type="number"
					value={workout.reps}
					onChange={handleChanges}
					required
				/>
				<input
					className="workout-input"
					placeholder="Notes"
					name="notes"
					type="text"
					value={workout.notes}
					onChange={handleChanges}
					required
				/>
				<button className="add-button">Submit</button>
			</form>
			</div>
		</div>
	);
};

export default AddWorkout;
