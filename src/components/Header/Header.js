import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user, googleSingOut } = useFirebase()
    return (
        <nav className='nav-container'>
            <Link to='Home'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Product'>Product</Link>
            <Link to='Register'>Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {user?.uid ?
                <button onClick={googleSingOut}>Sing out</button>
                :
                <Link to='Login'>Login</Link>

            }
        </nav>
    );
};

export default Header;