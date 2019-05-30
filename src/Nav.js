import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function Nav() {

    return (
        <nav>
            <h3>My Shopping Site</h3>
            <ul className="nav-links">

                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/login">
                    <li>Login/Signup</li>
                </Link>
                <Link to="/addlist">
                    <li>New List</li>
                </Link>
                <Link to="/showlists">
                    <li>Show My Lists</li>
                </Link>


            </ul>
        </nav>

    )


}
export default Nav;