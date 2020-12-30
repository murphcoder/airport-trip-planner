import React from 'react';
import {NavLink} from 'react-router-dom'

const LoggedOutBar = () => {
  return (
    <div className="menu">
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
    </div>
  );
};
export default LoggedOutBar;