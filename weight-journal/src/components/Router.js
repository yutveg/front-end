import React from "react";
import { Route } from "react-router-dom";

//Components
import Dashboard from "./Dashboard";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import AddWorkout from "./dataRelated/AddWorkout";
import AddUserData from "./dataRelated/AddUserData";
import PrivateRoute from "../utils/PrivateRoute";
import UpdateWorkout from "./dataRelated/UpdateWorkout";
import UpdateUserData from "./dataRelated/UpdateUserData";

const Router = (props) => {
  return (
    <div>
      <Route
        exact
        path="/"
        render={(props) => <SignIn {...props} setId={props.setId} />}
      />
      <Route
        path="/addworkout/"
        component={(props) => <AddWorkout {...props} />}
      />
      <PrivateRoute
        path="/dashboard"
        component={(props) => <Dashboard {...props} id={props.id} />}
      />
      <Route path="/addinfo" render={(props) => <AddUserData {...props} />} />
      <Route path="/signin/" render={(props) => <SignIn {...props} />} />
      <Route path="/signup/" render={(props) => <SignUp {...props} />} />
      <Route
        path="/updateworkout/:id"
        render={(props) => <UpdateWorkout {...props} />}
      />
      <Route
        path="/updateuserinfo/:id"
        render={(props) => <UpdateUserData {...props} />}
      />
    </div>
  );
};

export default Router;
