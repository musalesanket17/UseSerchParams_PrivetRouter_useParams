import React from "react";
import { NavLink } from "react-router-dom";

let link = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/login",
    title: "Login"
  },
  {
    to: "/user",
    title: "User"
  },
  {
    to: "/contact",
    title: "contact"
  }
];

let baseStyle = {
  color: "black",
  textDecoration: "none"
};

let activeStyle = {
  color: "red",
  textDecoration: "none"
};

export default function Navbar() {
  return (
    <div style={{ display: "flex", gap: "3rem", justifyContent: "center" }}>
      {link.map((el) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          key={el.to}
          to={el.to}
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
}
