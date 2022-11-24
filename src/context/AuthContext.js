import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider, 
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
     signInWithPopup(auth, provider);
    //signInWithRedirect(auth, provider)
  };
  
  const githubSignIn = () => {
    const provider = new GithubAuthProvider();
     signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };

  const twitterSignIn = () => {
    const provider = new TwitterAuthProvider();
      //signInWithPopup(auth, provider);
     signInWithRedirect(auth, provider)
  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, githubSignIn, twitterSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
