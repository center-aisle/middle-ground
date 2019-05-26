import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import { Button } from 'react-materialize';

function logInOutBtn() {

    const onClickLogIn = () => {
		window.location.href = 'http://localhost:3001/auth/openidconnect';
	};
	const onClickLogOut = () => {
		window.location.href = 'http://localhost:3001/logout';
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
    )
}

export default logInOutBtn;
