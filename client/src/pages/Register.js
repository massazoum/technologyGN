
import React, { useState } from "react";
import {Link} from "react-router-dom"


function Register() {
  const [name , SetName] =useState('')
  const [email , SetEmail] =useState('')
  const [password , SetPassword] =useState('')
  async function registration(event){
    event.preventDefault()
    const response = await fetch('http://localhost:4000/api/register',{
      method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name,
      email,
      password
    })
  },)

  const data =await response.json()
  console.log(data)
  }
  return (
 <div>
  <h1>Registration</h1>
<form onSubmit={registration}>
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={(e)=>{SetEmail(e.target.value)}}
        value={email}
      />
    </div>
    <div>
      <label htmlFor="Username">Username</label>
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        value={name}
        onChange={(e)=>SetName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e)=>SetPassword(e.target.value)}

      />
    </div>
    <button type="submit">Submit</button>
    <span>
      Already have an account? <Link to={"/login"}>Login</Link>
    </span>
  </form>
 </div>
  );
}

export default Register;
