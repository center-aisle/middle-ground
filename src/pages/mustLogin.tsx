import React, { Component } from 'react';


// let Auth = {
//     isLoggedIn: false,
//     logIn() {
//         this.isLoggedIn = true;
//         window.location.href = 'http://localhost:3001/auth/openidconnect';
//     },
//     logOut() {
//         this.isLoggedIn = false;
//         window.location.href = '/';
//     },
// };


class mustLogin extends Component {

    state = {
        isLoggedIn: true
    };

    login = () => {
        this.state.isLoggedIn = true;
        window.location.href = 'http://localhost:3001/auth/openidconnect';
    };
    logout = () => {
        this.state.isLoggedIn = false;
        window.location.href = '/';
    };

    this.state.isLoggedIn ? 
    (
        render() {
            return (
                <div className='container'>
                    <p>You must log in or create an account to view your results and frenemies</p>
                    <button type='button' onClick={this.login}>Log in or create account</button>
                </div>
            );
        };
    ) : 
    (
        // render everything else here
    )
};

export default mustLogin;