import React from "react";
import '../Styles/Nav.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <NavLink to='/ninas-playhouse'>
                <button className="Nav__home-btn">Home</button>
            </NavLink>
            <NavLink to="/about">
                <button className="Nav__home-btn">About Us</button>
            </NavLink>
            <NavLink to="/browse">
                <button className="Nav__home-btn">Browse</button>
            </NavLink>
            <NavLink to="/login">
                <button className="Nav__home-btn">Login</button>
            </NavLink>
        </nav>
    )
}

export default Nav