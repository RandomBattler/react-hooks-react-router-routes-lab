import React from "react";
import { NavLink } from "react-router-dom";


/* define the NavBar component */
function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li key={0}>
      <NavLink to="/">
        Home
      </NavLink></li>
        <li key={1}>
      <NavLink to="/Movies">
        Movies
      </NavLink></li>
        <li key={2}>
      <NavLink to="/Directors">
        Directors
      </NavLink></li>
        <li key={3}>
      <NavLink to="/Actors">
      Actors
      </NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;
