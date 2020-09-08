import React from 'react'
import './Navbar.css'


const Navbar = ({user, handleLogout}) => {
  let nav = user ?
  <>
    <nav>
      <div className="nav-wrapper">
      <ul id="nav-mobile" className="right"></ul>
        <li><a href="/" className="nav-link">Caddie</a></li>
        <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
        <li><a href=" " className="nav-link" onClick={handleLogout}>Logout</a></li>
      </div>
    </nav>
  </>
  :
  <>
  <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="right">
        <li><a href="/login" className="nav-link">Login</a></li>
        <li><a href="/signup" className="nav-link">Sign Up</a></li>
      </ul>
    </div>
  </nav>
  </>
  return (
    <>
    {nav}
    </>
  )
}

export default Navbar