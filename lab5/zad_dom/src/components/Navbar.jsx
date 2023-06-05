import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { logOut } from "../firebase/AuthService";


export default function Navbar() {
  const user = useContext(UserContext);
  
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
              <p>logged in as {user.displayName ?? user.email}</p>
              <button className="menu-item" onClick={ () => logOut() }>Log out</button> 
            </>
          }
        </div>
    </nav>
  );
}