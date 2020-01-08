import React, { useState  } from "react";
import "./App.css";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {workoutdata} from "./workoutdata";
import AddWorkout from './components/AddWorkout';
import AddUserData from './components/AddUserData';
import PrivateRoute from "./components/PrivateRoute";
import UpdateWorkout from "./components/UpdateWorkout";

function App() {
  const [userid, setUserid] = useState('')

  let history = useHistory();

  const signOut = props => {
      setTimeout(() => {
        localStorage.removeItem('token')
        history.push('/signin/')
      }, 300)
  }

  return (
    <div className="App">
      <nav className="nav">
        <div className="header-container">
          <img className="header-icon" src="https://image.flaticon.com/icons/svg/2246/2246607.svg" alt="header-image"/>
          <h1 className="header">Workout Journal</h1>
        </div>
        <div className="nav-links">
          <Link to="/signin/">Sign In</Link>
          <Link to="/signup/">Sign Up</Link>
          <Link to="/addworkout/">Add Workout</Link>
          <Link onClick={signOut}>Sign Out</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/addworkout/">
          <AddWorkout />
        </Route>
        <PrivateRoute path="/dashboard" component={() => <Dashboard userid={userid} />} />
        <Route path="/addinfo/:id" render={props => <AddUserData {...props} />} />
        <Route path="/signin/" render={props => <SignIn {...props} setUserid={setUserid} />} />
        <Route path="/signup/" render={props => <SignUp {...props} />} />
        <Route path="/updateworkout/:id" render={props => <UpdateWorkout {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
