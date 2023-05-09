import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="logo.svg" alt="Logo"/>
        <div className="menu">
          <NavLink className="menu-item" to="/"> Home </NavLink>
          <NavLink className="menu-item" to="/about"> About </NavLink>
          <NavLink className="menu-item" to="/houses"> Our estates </NavLink>
          <NavLink className="menu-item" to="/add"> 
            <button className="menu-item" href="#">Add new</button> 
          </NavLink>
        </div>
    </nav>
  );
}