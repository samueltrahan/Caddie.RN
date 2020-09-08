import React from 'react'


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
        <li><a href=" " className="nav-link">Login</a></li>
        <li><a href=" " className="nav-link">Sign In</a></li>
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