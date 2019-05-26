import React from 'react';

function Logout() {
	return (
		<div className='container'>
            <div className='row'>
                <div className='col s12 m7'>
                    <div className='card'>
                        <div className='card-content center'>
                            <form action='http://localhost:3001/logout' method='get'>
                                <button id='openidconnect_logout'>Logout</button>
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

export default Logout;
