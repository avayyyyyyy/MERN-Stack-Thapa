import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../Store/tokenSlice";

const Login = () => {
  let tokenValue = useSelector((state) => state.token.token);
  let dispatch = useDispatch();
  let [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  async function handleInputs(e) {
    let name = e.target.name;
    let value = e.target.value;

    setInputs({ ...inputs, [name]: value });

    console.log(inputs);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.ok) {
        let token = await response.json();
        dispatch(setToken(token.token));
        setInputs({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log("Error in sending data");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="username">email :</label>
        <input
          type="email"
          value={inputs.email}
          name="email"
          onChange={handleInputs}
        />{" "}
        <label htmlFor="username">password:</label>
        <input
          type="password"
          value={inputs.password}
          name="password"
          onChange={handleInputs}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
