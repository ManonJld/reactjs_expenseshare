import React from 'react';
import {NavLink, Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container">

                <Link to='/' className='navbar-brand'>ExpenseShare</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/join' className='nav-link'>Join</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/create' className='nav-link'>Create</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;