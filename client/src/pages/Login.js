import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navigateToHomePage() {
    window.location.href = '/HomePage';
  }

  async function registration(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.user) {
      alert('Login successful');
      navigateToHomePage()
    } else {
      alert('Please check your username and password');
    }
  }

  return (
        <div>
      <h1>Connection</h1>
      <form onSubmit={registration}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => { setEmail(e.target.value); }}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          If you don't have an account? <Link to={"/register"}>Register</Link>
        </span>
      </form>
      </div>
  );
}

export default Login;
