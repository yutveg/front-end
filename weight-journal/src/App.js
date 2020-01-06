import React, { useState } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { workoutdata } from "./workoutdata";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [workouts] = useState(workoutdata);
  return (
    <div className="App">
      <nav>
        <h1 className="header">Workout Journal</h1>
        <div className="nav-links">
          <Link to="/dashboard/">Dashboard</Link>
          <Link to="/signin/">Sign In</Link>
          <Link to="/signup/">Sign Up</Link>
        </div>
      </nav>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/signin/">
          <SignIn workouts={workouts} />
        </Route>
        <Route path="/signup/">
          <SignUp workouts={workouts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
