import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {workoutdata} from "./workoutdata";
import AddWorkout from './components/AddWorkout';
import PrivateRoute from "./components/PrivateRoute";
import UpdateWorkout from "./components/UpdateWorkout";

function App(props) {
  const [workouts] = useState(workoutdata);
  const [loginStatus, setLoginStatus] = useState(false)
  useEffect(() => {
    if (loginStatus === true){
      props.history.push('/dashboard')
    }
  }, [loginStatus])
  return (
    <div className="App">
      <nav className="nav">
        <div className="header-container">
          <img className="header-icon" src="https://image.flaticon.com/icons/svg/2246/2246607.svg" alt="header-image"/>
          <h1 className="header">Workout Journal</h1>
        </div>
        <div className="nav-links">
          <Link to="/dashboard/">Dashboard</Link>
          <Link to="/signin/" setLoginStatus={setLoginStatus}>Sign In</Link>
          <Link to="/signup/">Sign Up</Link>
          <Link to="/addworkout/">Add Workout</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/addworkout/">
          <AddWorkout />
        </Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/signin/" render={props => <SignIn workouts={workouts}  />} />
        <Route path="/signup/" render={props => <SignUp workouts={workouts}  />} />
        <Route path="/updateworkout/:id" render={props => <UpdateWorkout {...props} workouts={workouts} />} />
      </Switch>
    </div>
  );
}

export default App;
