import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [singInWithGoogle,] = useSignInWithGoogle(auth)

    return (
        <div>
            <h2>Please Login</h2>

            <input type="email" name="" id="" placeholder='enter your email' />
            <br />
            <input type="password" name="" id="" placeholder='enter your password' />
            <br />
            <button type="submit">Login</button>
            <button onClick={() => singInWithGoogle()}>Google Sing In</button>

        </div>
    );
};

export default Login;