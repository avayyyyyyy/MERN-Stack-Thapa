import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../Store/tokenSlice";

const Register = () => {
  let tokenValue = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  // console.log(tokenValue);
  let [inputs, setInputs] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleInputs(e) {
    let name = e.target.name;
    let value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    if (response.ok === true) {
      let token = await response.json();
      dispatch(setToken(token.token));
      navigate("/");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          value={inputs.username}
          name="username"
          onChange={handleInputs}
        />
        <label htmlFor="username">email :</label>
        <input
          type="email"
          value={inputs.email}
          name="email"
          onChange={handleInputs}
        />
        <label htmlFor="username">phone:</label>
        <input
          type="number"
          value={inputs.phone}
          name="phone"
          onChange={handleInputs}
        />
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

export default Register;
