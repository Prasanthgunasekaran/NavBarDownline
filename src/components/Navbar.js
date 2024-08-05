import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            {/* Navbar */}
            <nav class="navbar">
                <ul>
                    <li><a href="#" class="nav-link">Home</a></li>
                    <li><a href="#" class="nav-link">About</a></li>
                    <li><a href="#" class="nav-link">Services</a></li>
                    <li><a href="#" class="nav-link">Contact</a></li>
                </ul>
            </nav>

            {/* Second Navbar */}
            <nav className='nav'>
                <ul>
                    <li className='nav-link'>
                        <a className='menu'>HOME</a>
                    </li>

                    <li className='nav-link'>
                        <a className='menu'>ABOUT</a>
                    </li>

                    <li className='nav-link'>
                        <a className='menu'>SERVICES</a>
                    </li>

                    <li className='nav-link'>
                        <a className='menu'>CAREER</a>
                    </li>

                    <li className='nav-link'>
                        <a className='menu'>CONTACT</a>
                    </li>
                </ul>
            </nav>
            <Link to={"/search"}>Search</Link>
            
        </div>
    )
}

export default Navbar
