import React from 'react'


function Loginpage() {
  return (
    <form className='login'>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password'/>
        <button>Login</button>
    </form>
  )
}

export default Loginpage