import React, { useState } from 'react'


function Registerpage() {;
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");

  async function register(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register',{
      method : 'POST',
      body: JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
      
    })
    console.log(response)
    if(response.status!== 200){
      alert("Registeration failed")
    }else{
      alert('Registeration successfull')
    }

  }
  return (
    <form  className="register" onSubmit={register}>
        <input type="text" placeholder='username' value={username} onChange={ev =>setUsername(ev.target.value)}/>
        <input type="text" placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}/>
        <button >Register</button>
    </form>
  )
}

export default Registerpage