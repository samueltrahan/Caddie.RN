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
        <div className="golf-bag">
          <a  href='/'><img className="logo" alt="" src="/images/golf-ball-logo.png"></img></a>
        </div>
        <div className="search-courses">
          <a className="search" href="/search">Search for Courses</a>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar;