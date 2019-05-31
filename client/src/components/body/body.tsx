import React from 'react';
import { Slider, Caption, Slide, Col, CardPanel, Row } from 'react-materialize';
import './body.css';

function Body() {
	return (
		// <div className='container'>
		// 	<div className='row'>
		// 		<div className='col s12'>
		// 			<div className='card'>
		// 				<div className='card-content'>
		// 					<p className= "center">You're here because you're ready to build a bridge between the severely divided sides. You'll answer some questions, then select some of your favorite activities, and finally be connected with your new best Frenemy(s)!</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<Slider className="green darken-1" >
			<Slide image={<img />} >
				<Caption>
					<h3>
						Welcome to Frenemy!
	</h3>
					<h5 className="light grey-text text-lighten-3">
						So you're ready to bridge the gap...
	</h5>
				</Caption>
			</Slide>
			<Slide image={<img />}>
				<Caption placement="left">
					<h3>
						First take a short quiz.
	</h3>
					<h5 className="light grey-text text-lighten-3">
						No sweat, you won't be graded!
	</h5>
				</Caption>
			</Slide>
			<Slide image={<img  />}>
				<Caption placement="right">
					<h3>
						Then you'll create a user account.
	</h3>
					<h5 className="light grey-text text-lighten-3">
						Select some of your favorite things!
	</h5>
				</Caption>
			</Slide>
			<Slide image={<img />}>
				<Caption>
					<h3>
						Finally, you'll make a few frenemys!
						</h3>
					<h5 className="light grey-text text-lighten-3">
						Use the navigation buttons to the right to get started...
	</h5>
				</Caption>
			</Slide>
		</Slider>


	);
}

export default Body;
