import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") ? setAuth(true) : setAuth(false);
  }, []);

  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav className="nav">
      <div className="header">
        <span className="fas fa-dumbbell"></span>
      </div>
      {auth === false ? (
        <div className="nav-links">
          <Link to="/signin/">Sign In</Link>
          <Link to="/signup/">Sign Up</Link>
        </div>
      ) : (
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/addworkout/">Add Workout</Link>
          <Link to="/signin/" onClick={signOut}>
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
