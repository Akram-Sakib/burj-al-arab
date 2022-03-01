import { useState,useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider ,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
       
    const [user, setUser] = useState({})

    const signInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth).then(() => {
          setUser({});
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            
          }
        });
    }, [])

    return {
      user,
      logOut,
      signInUsingGoogle,
    };
};

export default useFirebase;