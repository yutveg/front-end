import React, { useState } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {workoutdata} from "./workoutdata";
import AddWorkout from './components/AddWorkout';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [workouts] = useState(workoutdata);
  return (
    <div className="App">
      <nav className="nav">
        <h1 className="header">Workout Journal</h1>
        <div className="nav-links">
          <Link to="/dashboard/">Dashboard</Link>
          <Link to="/signin/">Sign In</Link>
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
      </Switch>
    </div>
  );
}

export default App;
