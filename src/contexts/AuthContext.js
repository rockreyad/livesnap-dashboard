import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../service/firebase.config";

const AuthContext = createContext({
  currentUser: null,
  login: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  });

  const authToken = localStorage.getItem("token");

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    signOut(auth);
  };
  const value = {
    currentUser,
    login,
    logout,
    authToken
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
