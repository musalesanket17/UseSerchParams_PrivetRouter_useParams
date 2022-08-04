import React, { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    Login: true,
    token: null
  });

  const handleLogin = (token) => {
    //  alert("hii")
    setState({ ...state, Login: true, token: token });
    //  console.log(token)
  };

  const handleLogout = () => {
    setState({ ...state, Login: false, token: null });
  };

  return (
    <>
      <authContext.Provider value={{ state, handleLogin, handleLogout }}>
        {children}
      </authContext.Provider>
    </>
  );
}
