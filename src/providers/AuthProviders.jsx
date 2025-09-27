import React, { createContext } from 'react';
import auth from '../firebase.init';


export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {
    const name = 'Zayan Shanto'
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        name,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default  AuthProviders;