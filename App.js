import { Route, Routes } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/navbar";
import AllRoutes from "./AllRoutes/allRoutes";
import PriverRoute from "./components/PriverRouter";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <PriverRoute />
    </div>
  );
}
