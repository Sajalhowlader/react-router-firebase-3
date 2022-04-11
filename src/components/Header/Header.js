import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <Link to='Home'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Product'>Product</Link>
            <Link to='Register'>Register</Link>
            <Link to='Login'>Login</Link>
        </nav>
    );
};

export default Header;