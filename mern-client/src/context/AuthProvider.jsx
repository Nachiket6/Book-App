import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const[ loading, setLoading] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signOut = () => {
        setLoading(true);
        return auth.signOut();
    
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(user);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe();
        }     
    }, [])


    const authInfo  = {
        user,
        createUser,
        login,
        loginWithGoogle,
        signOut,
        loading,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider