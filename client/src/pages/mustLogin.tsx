import React, { Component } from 'react';
// import { render } from 'react-dom';

export default class mustLogin extends Component {

    state = {
        isLoggedIn: false
    };

    login = () => {
        this.state.isLoggedIn = true;
        window.location.href = 'http://localhost:3001/auth/openid-client';
    };
    logout = () => {
        this.state.isLoggedIn = false;
        window.location.href = '/';
    };

    render() : JSX.Element {
        return this.state.isLoggedIn ? 
        (
            <div className='container'>
                <form className='login-form' action='http://localhost:3001/auth/openid-client' method='POST'>
                    <p>You must log in or create an account to view your results and frenemies</p>
                    <button type='submit' onClick={this.login}>Log in or create account</button>
                </form>
            </div>
        ) : 
        (
            <div className='container'>
                <p>'YOUR ACCOUNT HERE'</p>
            </div>            
        );
    };
}