import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'
const auth = getAuth(app)
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className='nav-container'>
            <Link to='Home'>Home</Link>
            <Link to='About'>About</Link>
            <Link to='Product'>Product</Link>
            <Link to='Register'>Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {user?.uid ?
                <button onClick={() => signOut(auth)}>Sing out</button>
                :
                <Link to='Login'>Login</Link>

            }
        </nav>
    );
};

export default Header;