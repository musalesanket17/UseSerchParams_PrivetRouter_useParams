import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function UserPage() {
  const params = useParams();

  console.log(params);

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${params.user_id}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      {/* {console.log(data)} */}

      <h3>{data.first_name}</h3>
      <img src={data.avatar} alt={data.first_name} />
      <h4>{data.email}</h4>
      <NavLink to="/user">Go Back</NavLink>
    </div>
  );
}
