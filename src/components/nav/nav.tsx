import React from 'react';
import {Button} from 'react-materialize';
// import './nav.css';

function Nav() {
  return (

<Button
  floating
  fab={{direction: 'bottom'}}
  icon="edit"
  className="red"
  large
  style={{top: '50px'}}
>
<Button floating icon="insert_chart" className="red" />
<Button floating icon="format_quote" className="yellow darken-1" />
<Button floating icon="publish" className="green" />
<Button floating icon="attach_file" className="blue" />
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
