import React from 'react';
import { Button } from 'react-materialize';
// import './nav.css';

function Nav() {

	const onClickLogIn = () => {
		window.location.href = 'http://localhost:3001/auth/openidconnect';
		Auth.isLoggedIn = true;
	};
	const onClickLogOut = () => {
		window.location.href = 'http://localhost:3001/logout';
		Auth.isLoggedIn = false;
    };

	const Auth = {
        isLoggedIn: false,
        logIn() {
            this.isLoggedIn = true;
        },
        logOut() {
            this.isLoggedIn = false;
        }
	};
	
	const loginBtn = 
		<Button
			floating
			icon='account_circle'
			className='blue waves-effect'
			tooltip='Log in or create new account'
			tooltipOptions={{position: 'left'}}
			onClick={onClickLogIn}
		/>
	;

	const logoutBtn = 
		<Button
			floating
			icon='power_settings_new'
			className='blue waves-effect'
			tooltip='Log out'
			tooltipOptions={{position: 'left'}}
			onClick={onClickLogOut}
		/>
	;

    Auth.isLoggedIn ?
        (return (
            < Button
                floating
                icon='power_settings_new'
                className='blue waves-effect'
                tooltip='Log out'
                tooltipOptions={{position: 'left'}}
                onClick={onClickLogOut}
            />
        )) : (
            return (
                <Button
                floating
                icon='account_circle'
                className='blue waves-effect'
                tooltip='Log in or create new account'
                tooltipOptions={{position: 'left'}}
                onClick={onClickLogIn}
            />
            )
        )
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
