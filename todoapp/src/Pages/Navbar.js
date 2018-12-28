import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import Logo from '../Images/logo.png'

const Navbar = (props) => {
    //console.log(props);
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink className="brand-logo" exact to="/"><img width="90" src={Logo} alt="Logo" /></NavLink>
                <ul className="right">
                    <li><NavLink to="/about">About us</NavLink></li>
                    <li><NavLink to="/careers">Careers</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)