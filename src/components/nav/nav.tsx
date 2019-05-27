import React from 'react';
import { Button } from 'react-materialize';
// import './nav.css';


// need to make the below part of state
// or make nav accept props
const Auth = {
	isLoggedIn: true,
	logIn() {
		this.isLoggedIn = true;
	},
	logOut() {
		this.isLoggedIn = false;
	}
};

function Nav(props: { state: { isLoggedIn: any; }; }) {

	const onClickHome = () => {
		window.location.href = '/';
		console.log("let's go to the home page");
	};
	const onClickAbout = () => {
		window.location.href = '/about';
		console.log("let's go to the about page");
	};
	const onClickLogIn = () => {
		window.location.href = 'http://localhost:3001/auth/openidconnect';
		Auth.isLoggedIn = true;
		console.log("let's log in or create a new account");
	};
	const onClickLogOut = () => {
		window.location.href = 'http://localhost:3001/logout';
		Auth.isLoggedIn = false;
		console.log("let's log out");
    };



	return (
		<div>
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

			{
				props.state.isLoggedIn
				? (
					<Button
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
						onClick={onClickLogIn}
					/>
				)
			}

			<Button
				floating
				icon='home'
				className='blue waves-effect'
				tooltip='Home'
				tooltipOptions={{position: 'left'}}
				onClick={onClickHome}
			/>
			</Button>
		</div>
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
