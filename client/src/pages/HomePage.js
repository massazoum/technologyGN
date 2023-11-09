// HomePage.js
// import { useEffect } from 'react';
import React from 'react';
// import jwt from 'jsonwebtoken'

function HomePage() {

  // const history =useHistory()
  // useEffect(()=>{
  //   const token =localStorage.getItem('token')
  //   if(token){
  //     const user =jwt.decode(token)
  //     if(!user){
  //       localStorage.removeItem('token')
  //       history.replace.href ='/login'
  //     }
  //   }
  // },[])
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of your homepage after login.</p>
    </div>
  );
}

export default HomePage;