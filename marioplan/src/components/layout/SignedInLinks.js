import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/createproject">New Project</NavLink>
            </li>
            <li>
                <NavLink to="/">Signout</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">PP</NavLink>
            </li>
        </ul>
    )
}
export default SignedInLinks;