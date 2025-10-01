import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const name = "Zayan Shanto";
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogout = () => {
    if (auth.currentUser) {
      signOut(auth)
        .then(() => {
          alert("Signed out successfully!");
        })
        .catch((error) => {
          console.error("there is no user for sign out", error);
        });
    }
    else{
      alert('There is no user for sign out')
    }
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    name,
    user,
    createUser,
    signInUser,
    handleLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
