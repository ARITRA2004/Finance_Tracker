import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      },{withCredentials:true}); //withCredentials is to set the cookie in the application tab
    } catch (err) {
      if(err.response.status === 400) setError("User do not exist");
      else if(err.response.status === 404) setError("Something is error");
      // console.log("Something went wrong!!", err);
    }
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="login-form">
          <h2>Welcome back</h2>
          <p>Login to your Finance Tracker account</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter the email"
                value={email}
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                Password
                <a href="#" className="forgot">
                  Forgot your password?
                </a>
              </label>
              <input
                type="password"
                placeholder="Enter the password"
                value={password}
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (<p className="error-message">{error}</p>)}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="divider">Or continue with</div>

          {/* <div className="social-btns">
        <button type="button"></button>
        <button type="button">G</button>
        <button type="button">∞</button>
      </div> */}

          <div className="signup">
            Don’t have an account? <a href="#">Sign up</a>
          </div>
        </div>

        <div className="image-side">
          <img
            src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-20606.jpg"
            alt="Finance Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
