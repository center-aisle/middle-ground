import React from 'react';

function Wrapper(props: any) {
	return (
		<div className='main-container'>
			{props}
			<p>This is the account</p>
		</div>
	);
}

export default Wrapper;
