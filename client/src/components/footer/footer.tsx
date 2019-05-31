import React from 'react';
import './footer.css';

function Footer() {
	return (
		<footer className='page-footer green'>
			<div className='container'>
				<div className='row'>
					<div className='col l6 s12'>
						<h4 className='white-text'><a className='white-text' href="/">Frenemy</a></h4>
						<p className='grey-text text-lighten-4'>  Find your new best frenemy!</p>
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
					<p className='grey-text text-lighten-4 right'>© 2019</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
