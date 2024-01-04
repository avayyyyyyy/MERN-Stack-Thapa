import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bout">About</NavLink>
          <NavLink to="/contact">Conatct</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">SignUp</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
