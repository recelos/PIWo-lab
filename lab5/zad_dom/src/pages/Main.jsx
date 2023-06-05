import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { logInWithGoogle } from "../firebase/AuthService";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { user, setUser } = useContext(UserContext)

  const user = useContext(UserContext)

  // const handleLogin = () => {
  //   axios
  //   .get("./data/users.json")
  //   .then((response) => {
  //     let users = response.data;
  //     const loggedInUser = users.find((user) => user.email === email && user.password === password);
  //     if (loggedInUser) {
  //       setUser(loggedInUser);
  //     } else {
  //       alert("Błąd logowania");
  //     }
  //   })
  //   .catch((err) => console.log(err));
  // }


  return(
    <section className="hero-section">
    <div className="login-container">
      <img src="dots hero section.svg" alt="" srcSet="" className="dots" />
      <div className="login-text">
        <h3>Find your dream home today!</h3>
        <p>Log in and book a house tour with our real estate agent!</p>
      </div>

      <div className="container">

        <label htmlFor="uname">Login</label>
        <input type="text" name="uname" required value={ email } onChange={ e => { setEmail(e.target.value) } }/>

        <label htmlFor="psw">Password</label>
        <input type="password" name="psw" required value={ password } onChange={ e => { setPassword(e.target.value) } }/>

        <div className="under-input">
          <p>No account?           
            <a href="#">Register</a>
          </p>
          <a href="#">Forgot password </a>
        </div>
        
        {/* <button onClick={ handleLogin } className="login">Log in</button> */}
        <button onClick={ logInWithGoogle } className="login">Log in with Google</button>
      </div>
    </div>

    <div className="hero-image">
      <img className="img" src="hero image.png" alt="domek" />
    </div>
    </section>
  )
}