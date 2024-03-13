
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

    return (
        <header className="header">

            <nav className="nav container">
                   
                <ul className="nav__list">

                    <li>
                        <img src="nishit.jpg" alt="Profile pic" className="nav__logo" />
                    </li>

                    <li className="nav__item">
                        <NavLink to="/About" className="nav__link" >
                            About
                         </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Education" className="nav__link" >
                            Education
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Experience" className="nav__link" >
                            Experience
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Skills" className="nav__link" >
                            Skills
                        </NavLink>
                    </li>
                   
                </ul>
            </nav>
        </header>
        );
 };

export default Navbar;