import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInwithGoogle from "./SignInWithGoogle";
import "./auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h3>Login</h3>
        <label>Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="forgot-password">
          New user? <Link to="/register">Register Here</Link>
        </p>

        <div className="divider">or</div>

        <div className="google-signin">
          <SignInwithGoogle />
        </div>
      </form>
    </div>
  );
}

export default Login;
