import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link  } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {axiosWithAuth} from './utils/axiosWithAuth'
import AddWorkout from './components/AddWorkout';
import AddUserData from './components/AddUserData';
import PrivateRoute from "./components/PrivateRoute";
import UpdateWorkout from "./components/UpdateWorkout";

function App() {
  const [userID, setUserid] = useState('')
  const [workouts, setWorkouts] = useState([])
  const userid = localStorage.getItem('userid')


  useEffect(() => {
    if(localStorage.getItem('token')){
      axiosWithAuth()
      
      .get(`/users/${userid}/journal`)
      .then(res => {
        console.log(res.data)
        setWorkouts(res.data); 
        console.log(userid)
      })
      .catch(err => console.log(err));
      console.log(workouts)
    } else return
  }, [userid]);

  const signOut = () => {
        localStorage.removeItem('token')
        setUserid(0)
  }

  return (
    <div className="App">
      <nav className="nav">
        <div className="header">
          <span className="fas fa-dumbbell"></span>
        </div>
        <div className="nav-links">
          <Link to="/signin/">Sign In</Link> 
          <Link to="/signup/">Sign Up</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/addworkout/">Add Workout</Link>
          <Link to="/signin/" onClick={signOut}>Sign Out</Link>
        </div>
      </nav>
        <Route path="/addworkout/" component={props => <AddWorkout userid={userid} setUserid={setUserid} setWorkouts={setWorkouts} {...props} />} />
        <PrivateRoute path="/dashboard" component={props => <Dashboard userid={userid} setUserid={setUserid} setWorkouts={setWorkouts} workouts={workouts} {...props} />} />
        <Route path="/addinfo" render={props => <AddUserData {...props} userid={userid} />} />
        <Route path="/signin/" render={props => <SignIn {...props} setUserid={setUserid} />} />
        <Route path="/signup/" render={props => <SignUp {...props} />} />
        <Route path="/updateworkout/:id" render={props => <UpdateWorkout workouts={workouts} updateWorkout={setWorkouts} userid={userid} setUserid={setUserid} {...props} /> } />
    </div>
  );
}

export default App;
