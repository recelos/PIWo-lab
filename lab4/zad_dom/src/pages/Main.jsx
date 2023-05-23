export default function Main() {
  return(
    <section className="hero-section">

    <div className="login-container">
      <img src="dots hero section.svg" alt="" srcSet="" className="dots" />
      <div className="login-text">
        <h3>Find your dream home today!</h3>
        <p>Log in and book a house tour with our real estate agent!</p>
      </div>

      <div className="container">

        <label for="uname">Login</label>
        <input type="text" name="uname" required />

        <label for="psw">Password</label>
        <input type="password" name="psw" required />

        <div className="under-input">
          <p>No account?           
            <a href="#">Register</a>
          </p>
          <a href="#">Forgot password </a>
        </div>
        
        <button className ="login" type="submit">Log in</button>
      </div>
    </div>

    <div className="hero-image">
      <img className="img" src="hero image.png" alt="domek" />
    </div>
    </section>
  )
}