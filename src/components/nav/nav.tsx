import React from 'react';
import { Button } from 'react-materialize';
import logInOutBtn from '../logInOutBtn/logInOutBtn';
// import './nav.css';

function Nav() {

	const onClickHome = () => {
		window.location.href = '/';
	};
	const onClickAbout = () => {
		window.location.href = '/about';
	};

	const Auth = {
        isLoggedIn: false,
        logIn() {
            this.isLoggedIn = true;
            <Route path="/user/account" />
        },
        logOut() {
            this.isLoggedIn = false;
            <Route path="/404" />
        }
    };

	return (
		<Button
			floating
			fab={{direction: 'bottom', hoverEnabled: true}}
			icon='menu'
			className='blue waves-effect'
			large
			style={{top: '50px'}}
		>
		<Button
			floating
			icon='info'
			className='blue waves-effect'
			tooltip='About'
			tooltipOptions={{position: 'left'}}
			onClick={onClickAbout}
		/>

				? ( <Button
					floating
					icon='power_settings_new'
					className='blue waves-effect'
					tooltip='Log out'
					tooltipOptions={{position: 'left'}}
					onClick={onClickLogOut}
				/>
			) : (
				<Button
					floating
					icon='account_circle'
					className='blue waves-effect'
					tooltip='Log in or create new account'
					tooltipOptions={{position: 'left'}}
					onClick={onClickAccount}
				/>
			)

		<Button
			floating
			icon='home'
			className='blue waves-effect'
			tooltip='Home'
			tooltipOptions={{position: 'left'}}
			onClick={onClickHome}
		/>
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
