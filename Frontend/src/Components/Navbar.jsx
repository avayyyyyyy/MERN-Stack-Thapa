import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let isLoggedIn = useSelector((state) => state.token.isLoggedIn);

  return (
    <div>
      <ul>
        <li>
          {isLoggedIn ? (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Conatct</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">SignUp</NavLink>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
