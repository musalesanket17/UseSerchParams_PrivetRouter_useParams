import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export default function PriverRoute({ children }) {
  const { state } = useContext(authContext);

  // console.log(state);

  if (!state.Login) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
}
