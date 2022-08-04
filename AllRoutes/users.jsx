import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink, useSearchParams } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export default function User() {
  const [data, setData] = useState([]);
  const [searchParams, setSerchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  //  console.log(state)
  useEffect(() => {
  setSerchParams({page})
    // console.log(page);
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [page]);

  let A = {
    color: "black",
    textDecoration: "none"
  };
  let D = {
    color: "black",
    textDecoration: "none"
  };

 

  return (
    <>
      {data.map((el) => (
        <>
          <div key={el.id}>
            <h3>{el.first_name}</h3>
            <img src={el.avatar} alt={el.first_name} />
            <h4>{el.email}</h4>
          </div>
          <NavLink
            // style={{ display: "flex", gap: "1 rem", justifyContent: "center" }}
            key={el.id}
            to={`/userpage/${el.id}`}
            style={({ isActive }) => (isActive ? A : D)}
          >
            <h1>Show More Details</h1>
          </NavLink>
        </>
      ))}

      <button
        disable={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        1
      </button>
      <button
        disable={page === 2}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        2
      </button>
    </>
  );
}
