import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className='page-footer purple lighten-2'>
    <div className='container '>
      <div className='row'>
        <div className='col l6 s12'>
          <h5 className='white-text'>PLACE HOLDER</h5>
          <p className='grey-text text-lighten-4'>You can use rows and columns here to organize your footer content.</p>
        </div>
        <div className='col l4 offset-l2 s12'>
          <h5 className='white-text'>Links</h5>
          <ul>
            <li><a className='grey-text text-lighten-3' href='/about'>About Us</a></li>
            <li><a className='grey-text text-lighten-3' href='/contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='footer-copyright'>
      <div className='container'>
        <a className='grey-text text-lighten-4 right'>2019 ©</a>
      </div>
    </div>
  </footer>

  );
}

export default Footer;
