import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export default function Login() {
  const { state, handleLogin, handleLogout } = useContext(authContext);
  const [formstate, setFormState] = useState({
    email: "",
    password: ""
  });
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formstate, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formstate)
    })
      .then((res) => res.json())
      .then((res) => {
        handleLogin(res.token);
        navigator("/user");
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="type your Email Address"
          onChange={handleChange}
          name="email"
          value={formstate.email}
        />
        <input
          placeholder="type your Password"
          onChange={handleChange}
          name="password"
          value={formstate.password}
        />
        <input type="submit" />
      </form>
    </>
  );
}
