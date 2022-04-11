import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase.init";


const auth = getAuth(app)
const provider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({})

    const singinWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return { user, singinWithGoogle }
}
export default useFirebase;