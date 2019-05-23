import React from 'react';
import {Button} from 'react-materialize';
// import './nav.css';

function Nav() {
  return (

<Button
  floating
  fab={{direction: 'bottom'}}
  icon="home"
  className="blue waves-effect"
  large
  style={{top: '50px'}}>
  
<Button floating icon="info" className="blue waves-effect"  />
<Button floating icon="pool" className="blue waves-effect" />
<Button floating icon="speaker_notes" className="blue waves-effect" />
<Button floating icon="person_pin_circle" className="blue waves-effect" />
</Button>
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
