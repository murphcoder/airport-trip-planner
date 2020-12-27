import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink><br />
            <NavLink to="/trips">Trips</NavLink><br />
            <NavLink to="/settings">User Settings</NavLink>
        </div>
    )
}

export default NavBar