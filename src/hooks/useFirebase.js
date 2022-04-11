import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])
    const googleSingOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    return {
        user,
        singinWithGoogle,
        googleSingOut
    }
}
export default useFirebase;