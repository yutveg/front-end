import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {workoutdata} from "./workoutdata";
import {axiosWithAuth} from './utils/axiosWithAuth'
import AddWorkout from './components/AddWorkout';
import AddUserData from './components/AddUserData';
import PrivateRoute from "./components/PrivateRoute";
import UpdateWorkout from "./components/UpdateWorkout";

function App() {
  const [userid, setUserid] = useState('')
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    if(localStorage.getItem('token')){
      axiosWithAuth()
      .get(`/users/${userid}/journal`)
      .then(res => {
        console.log(res.data);
        setWorkouts(res.data); 
        console.log(workouts)
      })
      .catch(err => console.log(err));
    } else console.log('im being derpy')
  }, [userid]);

  const signOut = () => {
        localStorage.removeItem('token')
        setUserid(0)
  }

  return (
    <div className="App">
      <nav className="nav">
        <div className="header">
          <span class="fas fa-dumbbell"></span>
        </div>
        <div className="nav-links">
          {!localStorage.getItem('token') && <Link to="/signin/">Sign In</Link> }
          {!localStorage.getItem('token') && <Link to="/signup/">Sign Up</Link>} 
          {localStorage.getItem('token') && <Link to="/dashboard">Dashboard</Link>}
          {localStorage.getItem('token') && <Link to="/addworkout/">Add Workout</Link>}
          {localStorage.getItem('token') && <Link to="/signin/" onClick={signOut}>Sign Out</Link>}
        </div>
      </nav>
        <Route path="/addworkout/" component={() => <AddWorkout userid={userid} />} />
        <PrivateRoute path="/dashboard" component={props => <Dashboard userid={userid} setWorkouts={setWorkouts} workouts={workouts} {...props} />} />
        <Route path="/addinfo/:id" render={props => <AddUserData {...props} />} />
        <Route path="/signin/" render={props => <SignIn {...props} setUserid={setUserid} />} />
        <Route path="/signup/" render={props => <SignUp {...props} />} />
        <Route path="/updateworkout/:id" render={props => <UpdateWorkout workouts={workouts} {...props} /> } /> 
    </div>
  );
}

export default App;
