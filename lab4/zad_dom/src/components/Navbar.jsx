import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  
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
          {
            user && 
            <>
              <p>logged in as {`${user.firstName} ${user.lastName}`}</p>
              <button className="menu-item" onClick={ () => setUser(null)}>Log out</button> 
            </>
          }
        </div>
    </nav>
  );
}