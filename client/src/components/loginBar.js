import React from 'react';
import {NavLink} from 'react-router-dom'

const LoginBar = () => {
  return (
    <div>
      <NavLink to='/login'>Log In</NavLink>
      <br></br>
      <NavLink to='/signup'>Sign Up</NavLink>
    </div>
  );
};
export default LoginBar;