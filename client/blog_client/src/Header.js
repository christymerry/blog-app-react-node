import { useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  useEffect(() => {
    fetch('http://localhost:4000/profile',{
      credentials:'include'
    })
   }, []);
  return (
    <header>
    <Link to ="/" className ="logo">MyBlog</Link>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
  )
}

export default Header