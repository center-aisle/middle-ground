import React from 'react';

function Wrapper(props: any) {
	return (
		<div className='main-container'>
			<h3>Your account</h3>
			{props}
		</div>
	);
}

export default Wrapper;
