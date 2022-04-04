import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='title-container'>
            <h1>Laptop Ckeck</h1>
            </div>
            <div className='link-container'>
                <Link to = '/'>HOME</Link>
                <Link to = '/allreviews'>Reviews</Link>
                <Link to = '/dashboard'>Dashboard</Link>
                <Link to = '/blogs'>Blogs</Link>
                <Link to = '/about'>About</Link>
            </div>
        </nav>
    );
};

export default Navbar;