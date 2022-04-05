import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            
            <div className='title-container'>
            <h1>Laptop Ckeck</h1>
            </div>
            <div className='link-container'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}
                 to = '/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}
                 to = '/allreviews'>Reviews</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}
                 to = '/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}
                 to = '/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}
                 to = '/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;