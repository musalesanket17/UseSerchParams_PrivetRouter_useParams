import { Route, Routes } from "react-router-dom";

import Home from "./home";
import Login from "./login";

import Contact from "./contact";
import User from "./users";
import UserPage from "./userpage";
import PriverRoute from "../components/PriverRouter";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/user/"
          element={
            <PriverRoute>
              <User />
            </PriverRoute>
          }
        ></Route>
        <Route
          path="/userpage/:user_id"
          element={
            <PriverRoute>
              <UserPage />
            </PriverRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}
