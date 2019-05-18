import React from 'react';

function Nav() {
  return (

  <nav>
  <div className='nav-wrapper purple lighten-2'>
    <a href='/' className='brand-logo right'>Political Middle</a>
    <ul id='nav-mobile' className='left hide-on-med-and-down'>
      <li><a href='/user'>User Account</a></li>
      <li><a href='badges.html'>Find Friends</a></li>
      <li><a href='/about'>About</a></li>
      <li><a href='/contact'>Contact</a></li>

    </ul>
  </div>
</nav>

  );
}

export default Nav;


// // In YourComponent.js
// ...
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// ...
// // Use it just like a RRv4 <NavLink> (see RRv4 api for details):
// <NavLink
//   to="/some/path#with-hash-fragment"
//   activeClassName="selected"
//   // etc...
// >Link to Hash Fragment</NavLink>