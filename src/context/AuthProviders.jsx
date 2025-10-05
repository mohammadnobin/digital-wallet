'use client'
import React, { useState } from "react";
import { Authcontext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../lib/firebase/firebase.config";
import { useEffect } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider()

const saveTokenInCookie = async (user) => {
  if (user) {
    const token = await user.getIdToken();
document.cookie = `accessToken=${token}; path=/; samesite=strict; secure`;

  } else {
    document.cookie = `accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=strict`;
    console.log("Token removed from cookie");
  }
};


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const socialLoging = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const gitHubSingIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);
    setLoading(false);

    if (currentUser) {
      await saveTokenInCookie(currentUser);
    } else {
      document.cookie = `accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=strict`;
    }
  });

  return () => unsubscribe();
}, [saveTokenInCookie]);



  const authInfo = {
    createUser,
    signIn,
    socialLoging,
    gitHubSingIn,
    updateUserProfile,
    logOut,
    user,
    loading,
    resetPassword
  };

  return <Authcontext value={authInfo}>{children}</Authcontext>;
};

export default AuthProviders;