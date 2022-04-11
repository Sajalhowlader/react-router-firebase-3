import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { singinWithGoogle } = useFirebase()
    return (
        <div>
            <h2>Please Login</h2>

            <input type="email" name="" id="" placeholder='enter your email' />
            <br />
            <input type="password" name="" id="" placeholder='enter your password' />
            <br />
            <button type="submit">Login</button>
            <button onClick={singinWithGoogle} type="submit">Google Sing In</button>

        </div>
    );
};

export default Login;