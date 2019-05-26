import React from 'react';

function Login() {
	return (
		<div className='container'>
            <div className='row'>
                <div className='col s12 m7'>
                    <div className='card'>
                        <div className='card-content center'>
                            <form action='http://localhost:3001/auth/openidconnect' method='get'>
                                <button id='openidconnect_identifier'>Log in or create a new account using Google</button>
                            </form>
                        </div>

                        <div className='card-action'>
                        <a href='/'>Home</a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
		</div>
	);
}

export default Login;
