import React from 'react';
import {NavLink} from 'react-router-dom';

const logout = (props) => {
    props.logoutUser(props.url);
};

const LoggedInBar = (props) => {
    return (
        <div className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to={{pathname: "/trips/new", loggedIn: props.loggedIn}}>New Trip</NavLink>
            <NavLink to={{pathname: "/trips"}}>Trips</NavLink>
            <NavLink to={{pathname: "/settings", loggedIn: props.loggedIn, user: props.user, url: props.url, deleteUser: props.deleteUser, updateUser: props.updateUser}}>User Settings</NavLink>
            <NavLink className="logout" to="/" onClick={event => logout(props)}>Logout</NavLink>
        </div>
    )
};

export default LoggedInBar;