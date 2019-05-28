import React from 'react';
import { Button } from 'react-materialize';
// import './nav.css';


function Nav() {

	// need to make the below part of state
	// and/or make nav accept props
	// const Auth = {
	// 	isLoggedIn: true,
	// 	logIn() {
	// 		this.isLoggedIn = true;
	// 	},
	// 	logOut() {
	// 		this.isLoggedIn = false;
	// 	},
	// };
	const onClickHome = () => {
		window.location.href = '/';
		console.log('let\'s go to the home page');
	};
	const onClickAbout = () => {
		window.location.href = '/about';
		console.log('let\'s go to the about page');
	};
	const onClickLogIn = () => {
		window.location.href = 'http://localhost:3001/auth/openidconnect';
<<<<<<< HEAD
		// Auth.isLoggedIn = true;
=======
		//Auth.isLoggedIn = true;
>>>>>>> 3e9bcca302831ae933b4c2a154e982cc1a77172d
		console.log('let\'s log in or create a new account');
	};
	const onClickLogOut = () => {
		window.location.href = 'http://localhost:3001/logout';
<<<<<<< HEAD
		// Auth.isLoggedIn = false;
=======
		//Auth.isLoggedIn = false;
>>>>>>> 3e9bcca302831ae933b4c2a154e982cc1a77172d
		console.log('let\'s log out');
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

			{/* {
				Auth.isLoggedIn
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
			} */}

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
