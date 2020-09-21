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
        <ul className="right">
          <li><a>Search Courses</a></li>
          <li><a>Favorite Courses</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default NavBar;