import React, { useState } from 'react'

function Registerpage() {;
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  async function register(){
    ev.preventDefault();
    await fetch('http;//localhost:4000',{
      method : 'POST',
      body: JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
    })

  }
  return (
    <form  className="register" on Sumbit={register}>
        <input type="text" placeholder='username' value={username} onChange={ev =>setUsername(ev.target.value)}/>
        <input type="text" placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}/>
        <button >Register</button>
    </form>
  )
}

export default Registerpage