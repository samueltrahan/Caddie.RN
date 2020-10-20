import React from 'react';
import './NavBar.css'

const NavBar = () => {
  // let nav = 
  // <>
  //   <nav>
  //     <div className="nav-wrapper">
  //       <ul id="nav-mobile" className="right">

  //       </ul>

  //     </div>
  //   </nav>
  // </>

  return (
    <>
    <nav>
      <div className="nav-wrapper">
          <a  href='/'><img className="logo" alt="" src="/images/caddie.rn.logo.png"></img></a>
        <ul className="right">
          <li><a href='/search'>Search Courses</a></li>
          {/* <li><a>Favorite Courses</a></li> */}
        </ul>
      </div>
    </nav>
    </>
  )
}

export default NavBar;