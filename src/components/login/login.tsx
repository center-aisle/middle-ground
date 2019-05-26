import React from 'react';

function Login() {
	return (
		<div className='container'>
            <div className='row'>
            <div className='col m2'></div>

                <div className='col s12 m8'>
                    <div className='card'>
                        <div className='card-content center'>
                            {/* <a href="/auth/openidconnect/return">User account link</a> */}
                            <form action='/auth/openidconnect/return' method='get'>
                                <div>
                                    <label>Log in or create a new account using Google</label><br/>
                                    <input type='submit' name='openidconnect_identifier' value='Magic Portal'/>
                                    <br/>
                                    {/* <input type='submit' value='Sign In'/> */}
                                </div>
                            </form>
                        </div>

                        <div className='card-action'>
                        <a href='/'>Home</a>
                        </div>
                    </div>
                </div>
                <div className='col m2'></div>

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
